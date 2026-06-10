import React, { useEffect, useRef } from 'react'
import styles from './WorkoutResultsModalComp.module.css'
import {useTrainMode} from '../../../utils/contexts/trainModeContext/trainModeContext'
import { useUser } from '../../../utils/contexts/userContext/userContext'


export default function WorkoutResultsModalComp({ onClose,onStopWorkout}) {
  const dialogRef = useRef(null)
 const { totalSeconds, formatTime, totalTon, completeWorkout } = useTrainMode()
 const {updateStatsDataOnServer,allStats}=useUser()
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])
function fromatedTimeToDisplay(){
     const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
   return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
}

function handleFinish(){
    if (onStopWorkout) {
        completeWorkout()
               
        if (onClose) {
            updateStatsDataOnServer('totalTon', (allStats.totalTon || 0) + totalTon)
            updateStatsDataOnServer('totalWorkouts', (allStats.totalWorkouts || 0) + 1)
            updateStatsDataOnServer('totalHours', (allStats.totalHours || 0) + totalSeconds / 3600)
            onClose()
        }
    }
}
  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.modalHeader}>
          <div className={styles.trophyIcon}>
            <i className="fas fa-trophy"></i>
          </div>
          <h2>Тренировка завершена!</h2>
          <p>Отличная работа, продолжай в том же духе</p>
        </div>

        <div className={styles.resultsGrid}>
          <div className={styles.resultCard}>
            <i className="fas fa-clock"></i>
            <div className={styles.resultInfo}>
              <span className={styles.resultLabel}>Общее время</span>
              <span className={styles.resultValue}>{fromatedTimeToDisplay()}</span>
            </div>
          </div>

          <div className={styles.resultCard}>
            <i className="fas fa-dumbbell"></i>
            <div className={styles.resultInfo}>
              <span className={styles.resultLabel}>Общий тонаж</span>
             <span className={styles.resultValue}>{(totalTon / 1000).toFixed(1)}</span>
            </div>
          </div>
        </div>

        <button className={styles.closeBtnMain} onClick={handleFinish}>
          Отлично!
        </button>
      </div>
    </dialog>
  )
}