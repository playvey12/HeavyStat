import React, { Component, createContext, useContext, useState } from 'react'

import ProgressService from '../../../services/ProgressService/ProgressService'
import { useEffect } from 'react'
import { useUser } from '../userContext/userContext'

const progressService = new ProgressService()

export const  ProgressContext=createContext()
export default function ProgressContextProvider({children}) {
  const { isAuthenticated } = useUser()
  const [selectedExercise, setSelectedExercise] = useState("Жим штанги лежа");
  const [selectedPeriod, setSelectedPeriod] = useState("30 дней");
  const [newRecordValue, setNewRecordValue] = useState(0);
  const [allRecords, setAllRecords] = useState({}); 
const [muscleList, setMuscleList] = useState([])
const [newPoint,setNewPoint]=useState()
const [weightsHistory,setWeightsHistory]=useState([])







  const handleExerciseChange = (e) => {
    setSelectedExercise(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };
//axios
useEffect(() => {
  loadMuscleList()
  if (!isAuthenticated) return
  loadHistory()
  loadWeightHistory()
}, [isAuthenticated])

const loadMuscleList = async () => {
    try {
        const data = await progressService.getMuscleList()
        setMuscleList(data)
    } catch (error) {
        console.error('Ошибка загрузки списка мышц:', error)
    }
}
const loadWeightHistory = async () => {
    try {
        const data = await progressService.getWeightHistory()
        setWeightsHistory(data)
    } catch (error) {
        console.error('Ошибка загрузки истории:', error)
    }
}
const loadHistory = async () => {
    try {
    const data = await progressService.getHistory();
    const grouped = data.reduce((acc, record) => {
      const name = record.exerciseName;
      if (!acc[name]) acc[name] = [];
      acc[name].push({
        id: record._id,
        exerciseWeightPoint: record.weight,
        exerciseWeightDate: record.dateDisplay,
        date: record.date
      });
      return acc;
    }, {});
    setAllRecords(grouped);
  } catch (error) {
    console.error('Ошибка загрузки рекордов:', error);
  }
}

//add new
const addRecordToServer = async (exerciseName, recordValue) => {
    try {
        const updatedData = await progressService.addNewRecord(exerciseName, recordValue)
        setAllRecords(updatedData)
    } catch (error) {
        console.error('Ошибка сохранения записи:', error)
    }
}

//add new weight
const addWeightToServer = async (newWeightPoint) => {
    try {
        const updatedData = await progressService.addNewWeightPoint(newWeightPoint)
        setWeightsHistory(updatedData)
    } catch (error) {
        console.error('Ошибка сохранения записи:', error)
    }
}

const deleteRecordPoint = async (pointId) => {
    try {
        await progressService.deleteRecordPointOnServer(pointId)
        const freshData = await progressService.getHistory()
        const grouped = freshData.reduce((acc, record) => {
            const name = record.exerciseName;
            if (!acc[name]) acc[name] = [];
            acc[name].push({
                id: record._id,
                exerciseWeightPoint: record.weight,
                exerciseWeightDate: record.dateDisplay,
                date: record.date
            });
            return acc;
        }, {});
        setAllRecords(grouped)
    } catch (error) {
        console.error('Ошибка удаления записи:', error)
    }
}

//delete last
const deleteWeightPoint = async (pointId) => {
    try {
        const updatedData = await progressService.deleteLastPoint(pointId)
        setWeightsHistory(updatedData)
    } catch (error) {
        console.error('Ошибка удаления записи:', error)
    }
}

  return (
    <ProgressContext.Provider value={{
      handleExerciseChange,
      handlePeriodChange,
      selectedExercise,
      setSelectedExercise,
      selectedPeriod,
      setSelectedPeriod,
      addRecordToServer,
      allRecords,  
      muscleList,
deleteRecordPoint,


      addWeightToServer,
      newPoint,
      setNewPoint,
      weightsHistory,
      setWeightsHistory,
      deleteWeightPoint

    }}>
      {children}
    </ProgressContext.Provider>
  );
}
export const useProgress = () => useContext(ProgressContext);
