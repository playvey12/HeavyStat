const mongoose = require('mongoose')
const Muscle = require('../models/MuscleLibrary')
const musclesData = require('../data/MuscleList.json')  

const importData = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/heavystat')
        await Muscle.deleteMany()
        await Muscle.insertMany(musclesData)
        process.exit()
    } catch (error) {
        console.error('Ошибка:', error)
        process.exit(1)
    }
}

importData()