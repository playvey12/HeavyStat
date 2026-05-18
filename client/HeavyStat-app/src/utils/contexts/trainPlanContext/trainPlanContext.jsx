import React, { Component, createContext, useContext, useState } from 'react'


import PlanService from '../../../services/PlanService/PlanService'
import { useEffect } from 'react'


export const  TrainPlanContext=createContext()
export default function TrainPlanContextProvider({children})  {
const [exercises,setExercises]=useState([])
const [activeDayId,setActiveDay]=useState(1)
const filteredExercises = exercises || []
const [MuskuleExercise, setMuskuleExercise] = useState([]) 
const [selectMuscle,setSelectMuscle]=useState(null)
const[newWeightValue,setNewWeightValue]=useState()
const [days,setDays]=useState()

//axios
const planService= new PlanService()

useEffect(() => {
 loadDaysData()
 loadExercisesData()
 loadMuscleList()
}, [activeDayId]);
//============days==========
async function loadDaysData(){
   const daysData = await planService.getDays()
    setDays(daysData)
}
//=============exersises==================================
async function loadExercisesData() {
    
  
    const exercisesData = await planService.getExercisesByDay(activeDayId)
    setExercises(exercisesData)
}

//==================addNEw==========

async function addNewItem(activeDayId,exerciseData) {
  const exercisesData = await planService.addExercise(activeDayId,exerciseData)
    setExercises(exercisesData)
}


//============delete===
async function deleteExercisesItem(exerciseId) {
    const updatedExercises = await planService.deleteExercise(activeDayId, exerciseId)
    setExercises(updatedExercises)
}
async function updateExerciseItem(exerciseId, updatedData) {
    const updatedExercises = await planService.updateExercise(activeDayId, exerciseId, updatedData)
    setExercises(updatedExercises)
}

async function loadMuscleList() {
    const muscleList = await planService.getMuscleList()
    setMuskuleExercise(muscleList)
}
async function addExerciseToMusculeGroup(muscleId, exerciseName) {
    const updatedMuscleList = await planService.addExerciseToLibrary(muscleId, exerciseName)
    setMuskuleExercise(updatedMuscleList)
}

async function removeExerciseFromMusculeGroup(muscleId, exerciseName) {
    const updatedMuscleList = await planService.deleteExerciseFromLibrary(muscleId, exerciseName)
    setMuskuleExercise(updatedMuscleList)
}


async function saveNewWeight(exerciseId, approachId, newWeight) {
    
    const updatedExercises = await planService.editExercise(
        activeDayId, 
       exerciseId, 
        approachId, 
        newWeight
    )
    setExercises(updatedExercises)
}


return (
      <TrainPlanContext.Provider
   value={{filteredExercises,setExercises,addNewItem,activeDayId,setActiveDay,MuskuleExercise,setMuskuleExercise,
    selectMuscle,setSelectMuscle,addExerciseToMusculeGroup,removeExerciseFromMusculeGroup,updateExerciseItem,newWeightValue,setNewWeightValue,saveNewWeight,
    days,deleteExercisesItem
   }}
      >
        {children}
      </TrainPlanContext.Provider>
    )


}
export const usePlan = () => useContext(TrainPlanContext);
