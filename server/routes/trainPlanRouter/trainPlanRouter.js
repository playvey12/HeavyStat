const express=require('express')
const planRouter=express.Router()
const User = require('../../models/User')
const daysData=require('../../data/daysData')

const planTypes = require('../../data/planTypes')
const Exercise=require('../../models/Exercise')
const Muscle =require('../../models/MuscleLibrary')
 const exercisesDataHard = require('../../data/exercisesDataHard'); 
 const exercisesDataLight = require('../../data/exercisesDataLight'); 
 const exercisesDataSplit = require('../../data/exercisesDataSplit'); 
 const exercisesDataFullBody = require('../../data/exercisesDataFullBody'); 
 const exercisesDataUpperLower = require('../../data/exercisesDataUpperLower'); 
 const exercisesDataPushPullLegs = require('../../data/exercisesDataPPL'); 
const path = require('path');


const requireAuth = require('../../middleware/requireAuth')
planRouter.use(requireAuth)
//=====days===================
planRouter.get('/days',(req,res)=>{
    res.json(daysData)
})
planRouter.get('/days/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const day=daysData.find(d=>d.id===id)
    if(!day){ return res.status(404).json("...") }
    res.json(day)
})

//=====muscleList (read) — без авторизации =====
planRouter.get('/muscleList',async (req,res)=>{
try{
 const muscle= await Muscle.find()
    res.json(muscle)
}
    catch(error){
    res.status(500).json({ error: error.message })
    }
})

planRouter.get("/planTypes",(req,res)=>{
res.json(planTypes)
})



planRouter.put('/generate-and-set', async (req, res) => {
    try {
        const { typeId } = req.body;
        const user = req.user;

        if (!typeId  === undefined) {
            return res.status(400).json({ error: "Не переданы typeId " });
        }

        let fileName = '';
        switch(parseInt(typeId)) {
            case 1: fileName = 'exercisesDataHard.js'; break;
            case 2: fileName = 'exercisesDataLight.js'; break;
            case 3: fileName = 'exercisesDataSplit.js'; break;
            case 4: fileName = 'exercisesDataFullBody.js'; break;
            case 5: fileName = 'exercisesDataUpperLower.js'; break;
           case 6: fileName = 'exercisesDataPPL.js'; break;
            default: fileName = '';
        }

        if (!fileName) {
            return res.status(400).json({ error: "Неверный тип плана" });
        }
        const filePath = path.join(__dirname, '..', '..', 'data', fileName);
        const templateExercises = require(filePath);

        await Exercise.deleteMany({ 
            userId: user._id, 
           
        });

        const exercisesToSave = templateExercises.map(ex => ({
            ...ex,
            userId: user._id,
          
            
            exerciseApproaches: (ex.exerciseApproaches || []).map(approach => ({
                ...approach,
                id: Math.floor(Date.now() + Math.random() * 1000)
            }))
        }));
        if (exercisesToSave.length > 0) {
            await Exercise.insertMany(exercisesToSave);
        }

        const updatedExercises = await Exercise.find({ 
            userId: user._id, 
            
        });
        res.status(200).json(updatedExercises);

    } catch (error) {
        console.error("Ошибка при перезаписи плана:", error);
        res.status(500).json({ error: "Ошибка сервера при генерации плана" });
    }
});



//============exercises===========

planRouter.get('/exercises/:dayId', async (req, res) => {
    try {
        const dayId = parseInt(req.params.dayId)
        const user = req.user

        
        const exercises = await Exercise.find({
            userId: user._id,
            activeDayId: dayId
        })
        res.json(exercises)
    } catch(error) {
      
        res.status(500).json({ error: error.message })
    }
})

planRouter.put('/exercises', async (req, res) => {
    try {
        const { activeDayId, exerciseId, approachId, newWeight } = req.body
        const user = req.user
        
   
        const exercise = await Exercise.findOne({
            _id: exerciseId,
            userId: user._id,
            activeDayId: activeDayId
        })
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
      const user= req.user
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
    const user=req.user
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
    const user=req.user

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

module.exports = planRouter;
