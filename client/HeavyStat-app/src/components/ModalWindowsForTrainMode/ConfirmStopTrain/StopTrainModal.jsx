import React, { useEffect, useRef } from 'react'
import styles from './StopTrainModal.module.css'
import WorkoutResultsModalComp from '../WorkoutResultsModal/WorkoutResultsModalComp'
import { useTrainMode } from '../../../utils/contexts/trainModeContext/trainModeContext'

export default function StopTrainModal({onClose, onStopConfirm}) {
  const { isTrainStoped, setIsTrainStoped, completeWorkout } = useTrainMode()
  const dialogRef = useRef(null)
  
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])
  
  function handleStopWorkout() {
    setIsTrainStoped(true)
  }
  
  return (
    <>
      <dialog ref={dialogRef} className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
          <div className={styles.modalHeader}>
            <div className={styles.trophyIcon}>
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h2>Ты уверен что хочешь завершить тренировку ?</h2>
          </div>
          <button className={styles.closeBtnMain} onClick={handleStopWorkout}>
            Завершить тренировку
          </button>
        </div>
      </dialog>
      {isTrainStoped === true && (
        <WorkoutResultsModalComp  
          onClose={() => {
            completeWorkout()
            onClose()
          }}  
          onStopWorkout={completeWorkout}
        />
      )}
    </>
  )
}