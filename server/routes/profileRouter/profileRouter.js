const express=require('express')
const fs = require('fs')
const path = require('path')
const profileRouter=express.Router()

const User = require('../../models/User')
const requireAuth = require('../../middleware/requireAuth')

profileRouter.use(requireAuth)

profileRouter.use((req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: "Пользователь не авторизован" });
    }
    next();
});
profileRouter.get('/', async (req, res) => { 
    const user = req.user
    res.status(200).json(user)
})

//username
profileRouter.get('/userName',async (req,res)=>{
    const user = req.user
const userName=user.displayName
if(!userName){
    res.status(500).send("Ошибка получения имени");
    return;
}
res.status(200).json({userName});
})
                                
profileRouter.put('/userName',async (req,res)=>{
    const {userName}=req.body
        const user = req.user
    if(!userName){
        res.status(400).json({error: "введите имя"})
    }
   user.displayName=userName
    await user.save() 
        res.status(200).json({userName: user.displayName})

})
//usertgname
profileRouter.get('/telegrammUserName', async(req, res) => {
        const user = req.user
    const userTgName = user.telegramUsername ? `@${user.telegramUsername}` : '@user'
    res.status(200).json({ userTgName });  
})

profileRouter.put('/telegrammUserName',async (req, res) => {
    
    const { userTgName } = req.body
    if (!userTgName) {
        res.status(400).json({ error: "введите имя вашего телеграмм аккаунта" })
        return;
    }
        const user = req.user

    user.telegramUsername = userTgName
    await user.save() 
    res.status(200).json({ userTgName: user.telegramUsername })
})

//avatar
profileRouter.get('/userAvatar',async (req, res) => {
        const user = req.user
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
        const user = req.user

    user.avatarUrl = avatarUrl
    await user.save() 
    res.status(200).json({ avatarUrl: user.avatarUrl })
})
//=======Замеры================================
profileRouter.get('/measurements',async (req, res) => {
        const user = req.user

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
const user = req.user
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
    const user = req.user
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
        
        const user = req.user
    
    
        
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
profileRouter.get('/stats', async (req, res) => {
    const stats = req.user?.stats; 
    if (!stats) {
       
        return res.status(401).json({ error: "Необходима авторизация" });
    }
    res.status(200).json(stats);
})

profileRouter.put('/stats', async (req, res) => {
    const { name, value } = req.body;
    if (value === undefined || !name) {
        return res.status(400).json({ error: "Неправильные данные" });
    }
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "Необходима авторизация" });
    }
    if (!user.stats || user.stats[name] === undefined) {
        return res.status(400).json({ error: "Такого параметра не существует" });
    }
    user.stats[name] = Number(value);

    try {
        user.markModified('stats');
        await user.save(); 
        return res.status(200).json(user.stats);
    } catch (error) {
        console.error("Ошибка при сохранении статистики:", error);
        return res.status(500).json({ error: "Ошибка сервера при сохранении статистики" });
    }
});

//=====================userWEights===============================
profileRouter.get('/userWeights', async (req, res) => {
    const userWeights = req.user?.userWeights; 
    if (!userWeights) {
        return res.status(404).json({ error: "Данные веса не найдены" });
    }
    res.status(200).json(userWeights);
});
profileRouter.put('/userWeights', async (req, res) => {
    const { name, value } = req.body;
    const user = req.user;
    if (!user?.userWeights || user.userWeights[name] === undefined) {
        return res.status(400).json({ error: "Параметр веса не существует" });
    }

    user.userWeights[name] = value;
    await user.save();
    res.status(200).json(user.userWeights);
});

module.exports = profileRouter;