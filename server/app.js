require('dotenv').config();

const express = require('express');
const session = require('express-session');        
const MongoStore = require('connect-mongo');     
const cors = require('cors');
const passport = require('passport');  

const app = express();
const PORT = process.env.PORT || 3001;

const connectDB = require('./db');
const mainRouter = require('./routes/mainRouter/mainRouter');
const authRouter = require('./routes/authRouter/authRouter'); 


require ('./config/passport.js');


app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true                 
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({  
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: false
    }
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', mainRouter);
app.use('/api/auth', authRouter); 


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Сервер запущен!");
        console.log(`Жми на http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Ошибка подключения к БД:", err);
});