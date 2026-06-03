require('dotenv').config({ override: false });

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

const connectDB = require('./server/db');
const mainRouter = require('./server/routes/mainRouter/mainRouter');
const authRouter = require('./server/routes/authRouter/authRouter');
require('./server/config/passport.js');

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
}

const allowedOrigins = [
    process.env.CLIENT_URL,
    'http://localhost:5173',
    'https://heavystat.by',
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const sessionStore = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'sessions',
    ttl: 60 * 60 * 24 * 30,
    autoRemove: 'native',
    mongoOptions: { serverSelectionTimeoutMS: 5000 }
});

sessionStore.on('error', (err) => {
    console.error('SESSION STORE ERROR:', err);
});

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', mainRouter);
app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, 'client', 'dist');
    app.use(express.static(distPath));
    app.use((req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

connectDB()
    .then(() => console.log("Mongo OK"))
    .catch(err => console.error("Mongo ERROR:", err));

app.listen(PORT, () => {
    console.log("Сервер запущен!");
});