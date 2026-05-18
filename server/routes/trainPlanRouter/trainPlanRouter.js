const express=require('express')
const planRouter=express.Router()
const User = require('../../models/User')
const daysData=require('../../data/daysData')

const planTypes = require('../../data/planTypes')
const Exercise=require('../../models/Exercise')
const Muscle =require('../../models/MuscleLibrary')



const getUserDefault = async () => {
    let user = await User.findOne({ telegramId: "default" })
    if (!user) {
        user = new User({ telegramId: "default", displayName: "Пользователь" })
        await user.save()
    }
    return user
}


//=====days===================
planRouter.get('/days',(req,res)=>{
    res.json(daysData)
})
planRouter.get('/days/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const day=daysData.find(d=>d.id===id)
    if(!day){
        res.status(404).json("такого дня не анйдено")
    }
    res.json(day)
})
//============exercises===========

planRouter.get('/exercises/:dayId',async(req,res)=>{

    try{
        const dayId =parseInt(req.params.dayId)
const user= await getUserDefault()
 const exercises = await Exercise.find({
    userId:user._id,
    activeDayId:dayId
 })

res.json(exercises)
    }
catch(error){
    res.status(500).json({ error: error.message })
}
})

planRouter.put('/exercises', async (req, res) => {
    try {
        const { activeDayId, exerciseId, approachId, newWeight } = req.body
        const user = await getUserDefault()
        
   
        const exercise = await Exercise.findOne({
            _id: exerciseId,
            userId: user._id,
            activeDayId: activeDayId
        })
        
        console.log('Найдено упражнение:', exercise ? 'да' : 'нет')
        if (!exercise) {
            console.log("12312")
            return res.status(404).json({ error: "Упражнение не найдено" })
        }
        
        const approach = exercise.exerciseApproaches.find(a => a.id === approachId)
        if (approach) {
          
            approach.weight = newWeight
            await exercise.save()
        } else {
           
            return res.status(404).json({ error: "Подход не найден" })
        }
        
        const exercises = await Exercise.find({ userId: user._id, activeDayId: activeDayId })
        res.json(exercises)
    } catch (error) {
        console.error('Ошибка в PUT /exercises:', error)
        res.status(500).json({ error: error.message })
    }
})
//add
planRouter.post('/exercises',async (req, res) => {
    try{
       const { activeDayId, exerciseData } = req.body
      const user= await getUserDefault()
 const newExercise=new Exercise({
    ...exerciseData,
    userId:user._id,
    activeDayId:activeDayId
 })
   
   await newExercise.save()
 const exercises = await Exercise.find({
    userId:user._id,
    activeDayId:activeDayId
 })
    
    res.json(exercises) 
    }
    catch(error){
    res.status(500).json({ error: error.message })

    }
})



//delete
planRouter.delete('/exercises/:activeDayId/:exerciseId',async (req, res) => {
    try{
    const user=await getUserDefault()

       const activeDayId = parseInt(req.params.activeDayId)
    const exerciseId = req.params.exerciseId
    

     const result=   await Exercise.deleteOne(
    {
        _id:exerciseId,
        userId:user._id,
        activeDayId:activeDayId
    }
   
   )
 if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Упражнение не найдено" })
    }
     const exercises= await Exercise.find({
        userId:user._id,
        activeDayId:activeDayId
    })
    
    res.json(exercises) 
    }
     catch(error){
    res.status(500).json({ error: error.message })

    }
})

//edit

planRouter.put('/exercises/:activeDayId/:exerciseId',async (req, res) => {
    try{
    const activeDayId = parseInt(req.params.activeDayId)
    const exerciseId = req.params.exerciseId
    const updatedData = req.body
    const user=await getUserDefault()

 const result = await Exercise.findOneAndUpdate(
    {
        _id:exerciseId,
        userId:user._id,
        activeDayId:activeDayId
    },
updatedData,
  { new: true }
) 
if (!result) {
            return res.status(404).json({ error: "Упражнение не найдено" })
        }

    const exercises= await Exercise.find({
        userId:user._id,
        activeDayId:activeDayId
    })
    res.json(exercises)
}
catch(error){
    res.status(500).json({ error: error.message })

    }
})



//=====muscleList============
planRouter.get('/muscleList',async (req,res)=>{
try{
 const muscle= await Muscle.find()

    res.json(muscle)
}
    catch(error){
    res.status(500).json({ error: error.message })

    }
})


planRouter.post('/muscleList',async (req, res) => {
    try{
        
    const { newExerciseName, muskuleId } = req.body
    
    if (!newExerciseName) {
        return res.status(400).json({ error: "имя надо ввести обязательно" })
    }
    if (!muskuleId) {
        return res.status(400).json({ error: "нужно выбрать категорию" })
    }
    
  
    
    const muscle=await Muscle.findById(muskuleId)
    if (!muscle) {
        return res.status(404).json({ error: "категория не найдена" })
    }
  muscle.exercises.push(newExerciseName)
   await muscle.save()
    const muscles=await Muscle.find()


    res.json(muscles)
    }
    catch(error){
    res.status(500).json({ error: error.message })

    }
})

planRouter.delete('/muscleList/:muscleId/:exerciseName', async (req, res) => {
    try {
        const muscleId = req.params.muscleId  
        const exerciseName = decodeURIComponent(req.params.exerciseName)
        
        const muscle = await Muscle.findById(muscleId)
        if (!muscle) {
            return res.status(404).json({ error: "Категория не найдена" })
        }
        
      
        muscle.exercises = muscle.exercises.filter(ex => ex !== exerciseName)
        await muscle.save()
        
        const muscles = await Muscle.find()
        res.json(muscles)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//=========генерить план===============
planRouter.get("/planTypes",(req,res)=>{
res.json(planTypes)
})

planRouter.get('/generate/:typeId', (req, res) => {
    const typeId = parseInt(req.params.typeId)
    let exercisesData
    switch(typeId) {
        case 1: exercisesData = require('../../data/exercisesDataHard'); break
        case 2: exercisesData = require('../../data/exercisesDataLight'); break
        case 3: exercisesData = require('../../data/exercisesDataSplit'); break
        case 4: exercisesData = require('../../data/exercisesDataFullBody'); break
        case 5: exercisesData = require('../../data/exercisesDataUpperLower'); break
        case 6: exercisesData = require('../../data/exercisesDataPushPullLegs'); break
        default: exercisesData = []
    }
    
    res.json(exercisesData)
})

module.exports = planRouter;
