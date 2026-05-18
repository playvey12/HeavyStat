const mongoose = require('mongoose')

const muscleSchema = new mongoose.Schema({
    nameOfMuscle: { type: String, required: true },
    exerciseCategory: { type: String, default: "power" },
    iconName: { type: String, default: "" },
    exercises: [String]
})

module.exports = mongoose.model('Muscle', muscleSchema)