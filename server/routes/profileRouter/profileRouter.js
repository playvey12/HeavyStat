const express=require('express')
const profileRouter=express.Router()

const User = require('../../models/User')


profileRouter.get('/', async (req, res) => { 
    const user = await User.findOne({ telegramId: "default" })
    res.status(200).json(user)
})

//username
profileRouter.get('/userName',async (req,res)=>{
    const user = await User.findOne({ telegramId: "default" })
const userName=user.displayName
if(!userName){
    res.status(500).send("Ошибка получения имени");
    return;
}
res.status(200).json({userName});
})
                                
profileRouter.put('/userName',async (req,res)=>{
    const {userName}=req.body
        const user = await User.findOne({ telegramId: "default" })
    if(!userName){
        res.status(400).json({error: "введите имя"})
    }
   user.displayName=userName
    await user.save() 
        res.status(200).json({userName: user.displayName})

})
//usertgname
profileRouter.get('/telegrammUserName', async(req, res) => {
        const user = await User.findOne({ telegramId: "default" })
    const userTgName = user.telegramUsername
    if (!userTgName) {
        res.status(500).send("Ошибка получения имени телеграмм");
        return;
    }
    res.status(200).json({ userTgName });  
})

profileRouter.put('/telegrammUserName',async (req, res) => {
    
    const { userTgName } = req.body
    if (!userTgName) {
        res.status(400).json({ error: "введите имя вашего телеграмм аккаунта" })
        return;
    }
        const user = await User.findOne({ telegramId: "default" })

    user.telegramUsername = userTgName
    await user.save() 
    res.status(200).json({ userTgName: user.telegramUsername })
})

//avatar
profileRouter.get('/userAvatar',async (req, res) => {
        const user = await User.findOne({ telegramId: "default" })
    const avatarUrl = user.avatarUrl
    if (!avatarUrl) {
        res.status(500).send("Ошибка получения имени телеграмм");
        return;
    }
    res.status(200).json({ avatarUrl });  
})

profileRouter.put('/userAvatar',async (req, res) => {
    const { avatarUrl } = req.body
    if (!avatarUrl) {
        res.status(400).json({ error: "неправильный файл" })
        return;
    }
        const user = await User.findOne({ telegramId: "default" })

    user.avatarUrl = avatarUrl
    await user.save() 
    res.status(200).json({ avatarUrl: user.avatarUrl })
})
//=======Замеры================================
profileRouter.get('/measurements',async (req, res) => {
        const user = await User.findOne({ telegramId: "default" })

    const measurements = user.measurements
    if (!measurements) {
        res.status(500).send("Ошибка получения замеров");
        return;
    }
    res.status(200).json(
        measurements
    );
})

profileRouter.put('/measurements',async (req, res) => {
    const {name, value } = req.body
    if (value === undefined || !name) {
        res.status(400).json({ error: "неправильные данные" })
        return;
    }
const user = await User.findOne({ telegramId: "default" })
    if (!user.measurements[name]) {
    res.status(400).json({ error: "такого замера не существует" })
    return;
}
        

    const oldValue = user.measurements[name].value
    user.measurements[name] = {
        value: value,
        lastValue: oldValue
    }
    await user.save() 
    res.status(200).json(
       user.measurements
    );
})
//=================ИИДАННЫЕ=======================
profileRouter.get('/userAiData',async (req, res) => {
    const user = await User.findOne({ telegramId: "default" })
    const userAIData = user.aiData
    if (!userAIData) {
        res.status(500).send("Ошибка получения ваших данных для ии");
        return;
    }
    res.status(200).json(
        userAIData
    );
})

profileRouter.put('/userAiData', async (req, res) => {
    try {
        const { name, value } = req.body
        console.log('name:', name)
        console.log('value:', value)
        
        const user = await User.findOne({ telegramId: "default" })
    
    
        
       if (user.aiData[name] === undefined)  {
            return res.status(400).json({ error: "такого параметра не существует" })
        }
        
        user.aiData[name] = value
        await user.save()
        
        res.status(200).json(user.aiData)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})
//=================Статистика=======================
profileRouter.get('/stats',async (req, res) => {
    const user = await User.findOne({ telegramId: "default" })
    const stats = user.stats
    if (!stats) {
        res.status(500).send("Ошибка получения данных статистики");
        return;
    }
    res.status(200).json(
        stats
    );
})
profileRouter.put('/stats',async (req, res) => {
    const {name, value } = req.body
    
    if (value === undefined || !name) {
        res.status(400).json({ error: "неправильные данные" })
        return;
    }
    const user = await User.findOne({ telegramId: "default" })
    
   
    if (user.stats[name] === undefined) {
        res.status(400).json({ error: "такого параметра не существует" })
        return;
    }
   
    user.stats[name] = value
    await user.save() 
    res.status(200).json(user.stats)
})
//=====================userWEights===============================
profileRouter.get('/userWeights',async (req, res) => {
    const user = await User.findOne({ telegramId: "default" })

    const userWeights = user.userWeights
    if (!userWeights) {
        res.status(500).send("Ошибка получения веса");
        return;
    }
    res.status(200).json(
        userWeights
    );
})
profileRouter.put('/userWeights',async (req, res) => {
    const {name, value } = req.body
    
    if (value === undefined || !name) {
        res.status(400).json({ error: "неправильные данные" })
        return;
    }
    
    const user = await User.findOne({ telegramId: "default" })
   
    if (user.userWeights[name] === undefined) {
        res.status(400).json({ error: "такого параметра не существует" })
        return;
    }
   
    user.userWeights[name] = value
    await user.save() 
    res.status(200).json(user.userWeights)
})

module.exports = profileRouter;