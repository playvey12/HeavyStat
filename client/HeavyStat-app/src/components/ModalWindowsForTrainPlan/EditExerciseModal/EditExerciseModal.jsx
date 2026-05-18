import React, { useEffect, useRef, useState } from 'react'
import styles from './EditExerciseModal.module.css'
import { getRandomInt } from '../../../utils/mockData'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'

export default function EditExerciseModal({ onClose, editingExercise }) {
  const dialogRef = useRef(null)
  const { updateExerciseItem } = usePlan()
  const [approaches, setApproaches] = useState(editingExercise.exerciseApproaches || [])
  const [exerciseName, setExerciseName] = useState(editingExercise.exerciseName )

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])


  const handleInputChange = (id, field, value) => {
    setApproaches(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  function addAproaches() {
    setApproaches([...approaches, { id: getRandomInt(0, 100000), reps: 0, weight: 0 }])
  }

  function removeApproaches(id) {
    if (approaches.length > 1) {
      setApproaches(approaches.filter((item) => item.id !== id))
    }
  }

const handleSave = () => {
  const weightsArray = approaches.map(a => a.weight || 0)
  const repsArray = approaches.map(a => a.reps || 0)
  const updatedData = {
    exerciseName: exerciseName,
    exerciseApproaches: approaches,
    exerciseWeights: weightsArray,
    exerciseReps: repsArray,
    exerciseRepeats: approaches.length,
    exerciseWeight: approaches[0]?.weight || 0,
    exerciseRepetitions: approaches[0]?.reps || 0
  }
  updateExerciseItem(editingExercise._id, updatedData)
  onClose()
}
  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={onClose}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.modalHeader}>
          <h2>Редактирование</h2>
          <input 
            type="text" 
            className={styles.exerciseNameInput} 
            value={exerciseName} 
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>

        <div className={styles.setsList}>
          {approaches.map((item, index) => (
            <div key={item.id} className={styles.setItem}>
              <div className={styles.setNumber}>{index + 1}</div>
              <input 
                type="number" 
                className={styles.input} 
                placeholder="Вес" 
                value={item.weight}
                onChange={(e) => handleInputChange(item.id, 'weight', e.target.value)}
              />
              <input 
                type="number" 
                className={styles.input} 
                placeholder="Повторы" 
                value={item.reps}
                onChange={(e) => handleInputChange(item.id, 'reps', e.target.value)}
              />
              <button onClick={() => removeApproaches(item.id)} className={styles.removeBtn}>×</button>
            </div>
          ))}
        </div>

        <button onClick={addAproaches} className={styles.addSetBtn}>+ Добавить подход</button>

        <div className={styles.buttons}>
          <button className={styles.cancelBtn} onClick={onClose}>Отмена</button>
          <button className={styles.saveBtn} onClick={handleSave}>Сохранить</button>
        </div>
      </div>
    </dialog>
  )
}
