import React, { Component, createContext, useContext, useState, useEffect } from 'react'
import { usePlan } from '../trainPlanContext/trainPlanContext'

export const TrainModeContext = createContext()

export default function TrainModeContextProvider({ children }) {
  const { activeDayId, setActiveDay } = usePlan()

  // Твои оригинальные стейты
  const [selectedDay, setSelectedDay] = useState()
  const [activeModal, setActiveModal] = useState(null)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [totalTon, setTotalTon] = useState(0)
  const [isTrainStoped, setIsTrainStoped] = useState()
  
  // Статус активности: если в localStorage есть время старта, значит тренировка продолжается
  const [isWorkoutActive, setIsWorkoutActive] = useState(() => {
    return !!localStorage.getItem('workout_start_time')
  })

  // --- НОВЫЕ СТЕЙТЫ ДЛЯ СОХРАНЕНИЯ СОСТОЯНИЯ КОМПОНЕНТА КАРТОЧЕК ---
  const [activeExercise, setActiveExercise] = useState(() => {
    const saved = localStorage.getItem('tm_active_exercise')
    return saved ? JSON.parse(saved) : null
  })

  const [exerciseQueue, setExerciseQueue] = useState(() => {
    const saved = localStorage.getItem('tm_exercise_queue')
    return saved ? JSON.parse(saved) : []
  })

  const [currentApproachIndex, setCurrentApproachIndex] = useState(() => {
    const saved = localStorage.getItem('tm_current_approach_idx')
    return saved ? parseInt(saved, 10) : 0
  })

  const [isFinished, setIsFinished] = useState(() => {
    return localStorage.getItem('tm_is_finished') === 'true'
  })

  const formatTime = (time) => String(time).padStart(2, '0')

  // --- БЕССМЕРТНЫЙ ТАЙМЕР НА УРОВНЕ КОНТЕКСТА ---
  useEffect(() => {
    let interval = null

    if (isWorkoutActive) {
      let startTime = localStorage.getItem('workout_start_time')
      // Если время старта еще не записано (самый первый запуск) — записываем его
      if (!startTime) {
        startTime = Date.now().toString()
        localStorage.setItem('workout_start_time', startTime)
      }

      // Считаем прошедшие секунды на основе реального времени компьютера
      interval = setInterval(() => {
        const elapsedMs = Date.now() - parseInt(startTime, 10)
        setTotalSeconds(Math.floor(elapsedMs / 1000))
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isWorkoutActive])

  // --- АВТОМАТИЧЕСКОЕ СОХРАНЕНИЕ ПРОГРЕССА В LOCALSTORAGE ---
  useEffect(() => {
    if (isWorkoutActive) {
      localStorage.setItem('tm_active_exercise', JSON.stringify(activeExercise))
      localStorage.setItem('tm_exercise_queue', JSON.stringify(exerciseQueue))
      localStorage.setItem('tm_current_approach_idx', currentApproachIndex.toString())
      localStorage.setItem('tm_is_finished', isFinished.toString())
    }
  }, [activeExercise, exerciseQueue, currentApproachIndex, isFinished, isWorkoutActive])

  // Твои оригинальные функции форматирования
  function getFormatedTime() {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
  }

  function resetTimer() {
    setTotalSeconds(0)
    localStorage.removeItem('workout_start_time')
  }

  function onClose() {
    setActiveModal(null)
  }

  // Внутренняя функция полной очистки кэша тренировки
  function clearWorkoutStorage() {
    setIsWorkoutActive(false)
    resetTimer()
    setTotalTon(0)
    setActiveDay(null)
    onClose()

    // Сбрасываем и чистим новые стейты прогресса
    setActiveExercise(null)
    setExerciseQueue([])
    setCurrentApproachIndex(0)
    setIsFinished(false)

    localStorage.removeItem('workout_start_time')
    localStorage.removeItem('tm_active_exercise')
    localStorage.removeItem('tm_exercise_queue')
    localStorage.removeItem('tm_current_approach_idx')
    localStorage.removeItem('tm_is_finished')
  }

  // Твоя функция принудительной остановки
  function StopWorkout() {
    clearWorkoutStorage()
  }

  // Твоя функция успешного завершения
  function completeWorkout() {
    clearWorkoutStorage()
    setIsTrainStoped(false)
  }

  return (
    <TrainModeContext.Provider value={{
      // Твои оригинальные значения
      selectedDay, setSelectedDay, 
      activeModal, setActiveModal,
      totalSeconds, setTotalSeconds, 
      formatTime, resetTimer, getFormatedTime,
      totalTon, setTotalTon, 
      isWorkoutActive, setIsWorkoutActive, 
      StopWorkout, 
      isTrainStoped, setIsTrainStoped, 
      onClose, completeWorkout,

      // Добавленные глобальные стейты для списка упражнений
      activeExercise, setActiveExercise,
      exerciseQueue, setExerciseQueue,
      currentApproachIndex, setCurrentApproachIndex,
      isFinished, setIsFinished
    }}>
      {children}
    </TrainModeContext.Provider>
  )
}

export const useTrainMode = () => useContext(TrainModeContext);