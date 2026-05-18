import React, { useState, useEffect, useRef } from 'react'
import styles from './TimerForTrainModeComp.module.css'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'
import { useTrainMode } from '../../../utils/contexts/trainModeContext/trainModeContext'

export default function TimerForTrainModeComp( {isActive = false}) {

  const intervalRef = useRef(null)
  const{formatTime,totalSeconds, setTotalSeconds}=useTrainMode()
const {filteredExercises}=usePlan()
  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds(prev => prev + 1)
      }, 1000)
    } else {

      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive])

    const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const currentDate = new Date().toLocaleDateString('ru-RU')


 
  return (
    <>
      <p className={styles.sessionLabel}>ДЛИТЕЛЬНОСТЬ</p>
      <div className={styles.timerDisplay}>
        <div className={styles.timerUnit}>
          <span className={styles.timerValue}>{formatTime(hours)}</span>
          <span className={styles.timerSub}>ЧАС</span>
        </div>
        <span className={styles.timerSeparator}>:</span>
        <div className={styles.timerUnit}>
          <span className={styles.timerValue}>{formatTime(minutes)}</span>
          <span className={styles.timerSub}>МИН</span>
        </div>
        <span className={styles.timerSeparator}>:</span>
        <div className={styles.timerUnit}>
          <span className={styles.timerValue}>{formatTime(seconds)}</span>
          <span className={styles.timerSub}>СЕК</span>
        </div>
      </div>
      <p className={styles.sessionInfo}>
        <span>{currentDate}</span> • <span>{filteredExercises.length} упражнения</span>
      </p>
    </>
  )
}