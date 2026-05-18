const express=require('express')
const progressRouter=express.Router()
const progressData=require('../../data/progressData')
const Muscle =require('../../models/MuscleLibrary')

const ExerciseHistory =require('../../models/ExerciseRecord')
const WeightHistory = require('../../models/WeightHistory');
const User = require('../../models/User');

const getUserDefault = async () => {
  let user = await User.findOne({ telegramId: "default" });
  if (!user) {
    user = new User({ telegramId: "default", displayName: "Пользователь" });
    await user.save();
  }
  return user;
};



progressRouter.get('/muscleList',async (req,res)=>{
try{
 const muscle= await Muscle.find()
    res.json(muscle)
}
    catch(error){
    res.status(500).json({ error: error.message })
    }
})



progressRouter.get('/exerciseRecords', async (req, res) => {
  try {
    const user = await getUserDefault();
    const records = await ExerciseHistory.find({ userId: user._id }).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//add
progressRouter.post('/exerciseRecords', async (req, res) => {
  try {
    const { exerciseName, newRecordValue } = req.body;
    const weightValue = parseFloat(newRecordValue);
    if (isNaN(weightValue)) {
      return res.status(400).json({ error: 'newRecordValue должен быть числом' });
    }
    
    const user = await getUserDefault();
    const now = new Date();
    const dateDisplay = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

    const newRecord = new ExerciseHistory({ 
      userId: user._id,
      exerciseName,
      weight: weightValue,
      dateDisplay,
      date: now
    });
    await newRecord.save();

    const allRecords = await ExerciseHistory.find({ userId: user._id }).sort({ date: -1 });
    res.json(allRecords);
  } catch (error) {
   
    res.status(500).json({ error: error.message });
  }
});


//delete
progressRouter.delete('/exerciseRecords/:pointId', async (req, res) => {
  try {
    const user = await getUserDefault();
    await ExerciseHistory.deleteOne({ _id: req.params.pointId, userId: user._id });
    const remaining = await ExerciseHistory .find({ userId: user._id }).sort({ date: -1 });
    res.json(remaining);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//=============weightChart====



progressRouter.get('/weightHistory', async (req, res) => {
  try {
    const user = await getUserDefault();
    const records = await WeightHistory .find({ userId: user._id }).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//add
progressRouter.post('/weightHistory', async (req, res) => {

  try {
    const { newWeightPoint } = req.body;
    const user = await getUserDefault();
    const now = new Date();
    const dateDisplay = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

    const newRecord = new WeightHistory({
      userId: user._id,
      weight: parseFloat(newWeightPoint),
      dateDisplay,
      date: now
    });
    await newRecord.save();
  
    const allRecords = await WeightHistory .find({ userId: user._id }).sort({ date: -1 });
 
    res.json(allRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//del
progressRouter.delete('/weightHistory/:pointId', async (req, res) => {
  try {
    const user = await getUserDefault();
    await WeightHistory.deleteOne({ _id: req.params.pointId, userId: user._id });
    const remaining = await WeightHistory .find({ userId: user._id }).sort({ date: -1 });
    res.json(remaining);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = progressRouter;
