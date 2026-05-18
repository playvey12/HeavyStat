import React, { useEffect, useRef, useState } from 'react'
import styles from './EditExerciseModalComp.module.css'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'

export default function EditExerciseModalComp({ 
  onClose, 
  exerciseName,
  currentWeight, 
  onWeightUpdated 
}) {
  const [weight, setWeight] = useState(currentWeight || 0)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])





  function handleSave() {
    const newWeight = Number(weight)
    if (newWeight && newWeight !== 0 && newWeight !== currentWeight) {
      onWeightUpdated(newWeight)
    }
   
    onClose()
  }

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.modalHeader}>
          <div className={styles.headerIcon}>
            <i className="fas fa-dumbbell"></i>
          </div>
          <h2>Редактировать вес</h2>
          <p>{exerciseName}</p>
          <p className={styles.currentWeightHint}>Текущий вес: {currentWeight} кг</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.inputLabel}>Новый вес (кг)</label>
          <input 
            type="number" 
            className={styles.weightInput} 
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            step="2.5"
            autoFocus
          />
          <span className={styles.inputUnit}>кг</span>
        </div>

        <button onClick={handleSave} className={styles.saveBtn}>
          <i className="fas fa-save"></i>
          Сохранить
        </button>
      </div>
    </dialog>
  )
}