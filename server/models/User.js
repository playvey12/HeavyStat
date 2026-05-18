const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    telegramId: { type: String, unique: true },
    telegramUsername: { type: String, default: "" },
    displayName: { type: String, default: "Пользователь" },
    avatarUrl: { type: String, default: "./avatarImgs/avatar.png" },
  
    

    aiData: {
        userWeightForAI: { type: Number, default: 0 },
        userHeightForAI: { type: Number, default: 0 },
        userAgeForAI: { type: Number, default: 0 },
        userSkillForAI: { type: Number, default: 0 },
        userInjuriesForAI: { type: String, default: "Нету" }
    },
    

    userWeights: {
        userWeight: { type: Number, default: 60 },
        userStartWeight: { type: Number, default: 40 },
        userGoalWeight: { type: Number, default: 90 }
    },
    

    measurements: {
        chest: { value: { type: Number, default: 0 }, lastValue: { type: Number, default: 0 } },
        waist: { value: { type: Number, default: 0 }, lastValue: { type: Number, default: 0 } },
        hips: { value: { type: Number, default: 0 }, lastValue: { type: Number, default: 0 } },
        biceps: { value: { type: Number, default: 0 }, lastValue: { type: Number, default: 0 } },
        calf: { value: { type: Number, default: 0 }, lastValue: { type: Number, default: 0 } }
    },
    

    stats: {
        totalTon: { type: Number, default: 0 },
        totalWorkouts: { type: Number, default: 0 },
        totalHours: { type: Number, default: 0 }
    },
     role: {
        type: String,
        enum: ['user', 'admin'],  
        default: 'user'          
    }
})

module.exports = mongoose.model('User', userSchema)