import React, { Component, createContext, useContext, useState } from 'react'
import { usePlan } from '../trainPlanContext/trainPlanContext'

export const  TrainModeContext=createContext()
export default function TrainModeContextProvider({children})  {
const [selectedDay,setSelectedDay]=useState()
  const [activeModal, setActiveModal] = useState(null)
const [totalSeconds,setTotalSeconds]=useState(0)
const [totalTon,setTotalTon]=useState(0)
const [isWorkoutActive, setIsWorkoutActive]=useState(false)
const [isTrainStoped,setIsTrainStoped]=useState()
const formatTime = (time) => String(time).padStart(2, '0')
  const { activeDayId, setActiveDay } = usePlan()

function getFormatedTime() {
   const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
 return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
}
function resetTimer(){
  setTotalSeconds(0)
}
function onClose()
{setActiveModal(null)}

 function StopWorkout(){
  setIsWorkoutActive(false)
    resetTimer()
    setTotalTon(0)
    setActiveDay(null)
    onClose()
      }
      function completeWorkout() {
  setIsWorkoutActive(false)
  resetTimer()
  setTotalTon(0)
  setActiveDay(null)
  setIsTrainStoped(false)
  onClose()
}
    return(
<TrainModeContext.Provider value={{selectedDay,setSelectedDay,activeModal,totalSeconds,setTotalSeconds, setActiveModal,formatTime,resetTimer,getFormatedTime,
  totalTon,setTotalTon,isWorkoutActive, setIsWorkoutActive,StopWorkout,isTrainStoped,setIsTrainStoped,onClose,completeWorkout
}}>
{children}

</TrainModeContext.Provider>
    )
}
export const useTrainMode = () => useContext(TrainModeContext);
