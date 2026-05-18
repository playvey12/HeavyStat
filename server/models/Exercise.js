const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activeDayId: { type: Number, required: true },
    exerciseName: { type: String, required: true },
    exerciseApproaches: [{
        id: Number,
        reps: Number,
        weight: Number
    }],
    exerciseWeights: [Number],
    exerciseReps: [Number],
    exerciseRepeats: Number,
    exerciseRepetitions: Number,
    exerciseWeight: Number
})

module.exports = mongoose.model('Exercise', exerciseSchema)