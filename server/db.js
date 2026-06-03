const mongoose = require('mongoose')
const User = require('./models/User')

const createDefaultUser = async () => {
    const existingUser = await User.findOne({ telegramId: "default" })
    if (!existingUser) {
        const defaultUser = new User({
            telegramId: "default",
            displayName: "Пользователь",
            telegramUsername: "@user",
            userWeights: {
                userWeight:60,
                userStartWeight: 40,
                userGoalWeight: 90
            },
             role: "admin",
        })
        await defaultUser.save()
     
    }
}


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(' MongoDB подключена!')
        await createDefaultUser()
    } catch (error) {
        console.error(' Ошибка подключения к MongoDB:', error)
        process.exit(1)
    }
}

module.exports = connectDB