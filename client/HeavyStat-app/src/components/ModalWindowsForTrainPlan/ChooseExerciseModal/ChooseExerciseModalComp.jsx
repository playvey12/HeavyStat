import { useEffect, useRef, useState } from 'react'
import styles from './ChooseExerciseModalComp.module.css'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'
import { exerciseNames, getRandomInt } from '../../../utils/mockData'
import ExerciseDataModalComp from '../ExerciseDataModal/ExerciseDataModalComp'

export default function ChooseExerciseModalComp({ onClose, muscle }) {
  const dialogRef = useRef(null)
  const [customExercise, setCustomExercise] = useState('')
  const { MuskuleExercise, addExerciseToMusculeGroup, removeExerciseFromMusculeGroup } = usePlan()
  const [exerciseToAdd, setExerciseToAdd] = useState('')
  
const currentMuscule=MuskuleExercise.find(m=>m.id===muscle.id)||muscle
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

 

  const handleAddExerciseToList = (exerciseName) => {
    if(!exerciseName.trim())return
    addExerciseToMusculeGroup(muscle._id, exerciseName)
    setCustomExercise('')
    onClose()
  }

  const handleDeleteExercise = (exerciseName, e) => {
    e.stopPropagation()
    removeExerciseFromMusculeGroup(muscle._id, exerciseName)
  }

  function handleInputChange(e) {
    setCustomExercise(e.target.value)
  }

  return (
    <>
    <dialog ref={dialogRef} className={`${styles.modal} ${styles.active}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <header className={styles.modalHeader}>
          <h2>{currentMuscule.nameOfMuscle}</h2>
          <p>Выберите упражнение</p>
        </header>

        <div className={styles.addCustomSection}>
          <input 
            type="text"
            className={styles.customInput}
            placeholder="Добавить свое упражнение..."
            onChange={handleInputChange}
            value={customExercise}
          />
          <button className={styles.addBtn} onClick={() => handleAddExerciseToList(customExercise)}>
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className={styles.exercisesList}>
          {currentMuscule.exercises.map((exercise, index) => (
            <div className={styles.exerciseItem} onClick={() =>setExerciseToAdd(exercise)} key={index}>
              <span>{exercise}</span>
              <div className={styles.exerciseActions}>
                <i className="fas fa-chevron-right"></i>
                <button 
                  className={styles.deleteExerciseBtn}
                  onClick={(e) => handleDeleteExercise(exercise, e)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
    {exerciseToAdd&&(
      <ExerciseDataModalComp
      exerciseCategory={currentMuscule.exerciseCategory}
      exerciseName={exerciseToAdd}
      onClose={()=>setExerciseToAdd('')}
      />

    )
    
    }
    </>
  )
}