import React, { useEffect, useRef, useState } from 'react'
import styles from './AddExerciseModalComp.module.css'
import ChooseExerciseModalComp from '../ChooseExerciseModal/ChooseExerciseModalComp'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'







export default function AddExerciseModalComp({onClose}) {
    const dialogRef=useRef(null)
const {MuskuleExercise,setMuskuleExercise}=usePlan()
const {selectMuscle,setSelectMuscle}=usePlan()


     useEffect(()=>{
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },[])

  return (
    <>
    <dialog ref={dialogRef}  className={`${styles.modal} ${styles.active}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <header className={styles.modalHeader}>
          <h2>Выберите упражнение</h2>
          <p>Выберите группу мышц</p>
        </header>

        <div className={styles.muscleGroups}>
          {MuskuleExercise.map((muscle)=>(
            <div key={muscle._id} onClick={()=>setSelectMuscle(muscle)} className={styles.muscleCard}>
         
  <img 
  src={`/src/assets/iconForMuscules/${muscle.iconName}`} 
  alt={muscle.nameOfMuscle} 
  className={styles.exerciseImg} 
  className={styles.exerciseImg} alt={muscle.nameOfMuscle} />
            <span>{muscle.nameOfMuscle}</span>
          </div>
          ))}
          
        </div>
      </div>
    </dialog>
   {selectMuscle&&(
              <ChooseExerciseModalComp
              muscle={selectMuscle}
              onClose={()=>setSelectMuscle(null)}
              />
         )}
         </>
  )
}
