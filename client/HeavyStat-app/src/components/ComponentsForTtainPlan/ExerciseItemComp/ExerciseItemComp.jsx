import React, { useState } from 'react'
import styles from './ExerciseItemComp.module.css'

import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'
import EditExerciseModal from '../../ModalWindowsForTrainPlan/EditExerciseModal/EditExerciseModal'

export default function ExerciseItemComp() {
const {filteredExercises,setFilteredExercises,deleteExercisesItem}=usePlan()
const [editingExercise,setEditingExercise]=useState(null)

if (filteredExercises.length === 0) {
  
  return (
    <div className={styles.emptyState}>
      <i className="fas fa-dumbbell"></i>
      <p>Список упражнений пуст</p>
      <span>Добавьте первое упражнение</span>
    </div>
  );
}

  return (
    <>
   { filteredExercises.map((item)=>(
              <div key={item._id}
              className={styles.exerciseCard}>
                <div className={styles.exerciseIconWrapper}>
                  <i className="fas fa-dumbbell"></i>
                </div>
                <div className={styles.exerciseInfo}>
                  <h3>{item.exerciseName}</h3>
                  <p><i className="fas fa-repeat"></i> {item.exerciseRepeats} <i className="fas fa-weight-hanging"></i>{item.exerciseWeight} кг</p>
                </div>
                <div className={styles.exerciseActions}>
                  <button onClick={()=>setEditingExercise(item)} className={styles.editBtn}><i className="fas fa-edit"></i></button>
                  <button onClick={()=>deleteExercisesItem(item._id)} className={styles.deleteBtn}><i className="fas fa-trash"></i></button>
                </div>
              </div> 
            
    ))}
    {editingExercise&&(
    <EditExerciseModal
    editingExercise={editingExercise}
    onClose={()=>setEditingExercise(null)}/>
  )}
  </>
  )
  
}
