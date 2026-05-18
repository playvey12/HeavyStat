require('dotenv').config()
const express =require('express')
const app=express()
const cors = require('cors') 
const PORT=process.env.PORT || 3001;
const mainRouter=require('./routes/mainRouter/mainRouter')
const connectDB = require('./db')




app.use(cors({
    origin: '*'
}))
app.use(express.json({ limit: '10mb' }))  
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())
app.use('/api',mainRouter)



connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Сервер запущен!")
        console.log(`жми на http://localhost:${PORT}`)
    })
})