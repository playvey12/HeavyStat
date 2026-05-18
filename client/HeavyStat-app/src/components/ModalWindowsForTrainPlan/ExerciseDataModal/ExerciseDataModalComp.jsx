import React, { useEffect, useRef, useState } from 'react'
import styles from './ExerciseDataModalComp.module.css'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'
import { getRandomInt } from '../../../utils/mockData'
export default function ExerciseDataModalComp({ onClose, exerciseName,exerciseCategory }) {
  const dialogRef = useRef(null)
  const [approaches,setApproaches]=useState([
    {id:getRandomInt(0,100000),
reps:0,
weight:0
    }

])

const {activeDayId,addNewItem}=usePlan()

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])


const handleAddExercise = () => {
  if (!exerciseName || !exerciseName.trim()) return
  if (!approaches || approaches.length === 0) return

  const weightsArray = approaches.map(a => a.weight || 0)
  const repsArray = approaches.map(a => a.reps || 0)

  const newItem = {
    id: getRandomInt(0, 1000000),
    activeDayId: activeDayId,
    exerciseName: exerciseName,
    exerciseApproaches: approaches,
    exerciseWeights: weightsArray, 
    exerciseReps: repsArray,      
    exerciseRepeats: approaches.length, 
    exerciseRepetitions: approaches[0]?.reps || 0, 
    exerciseWeight: approaches[0]?.weight || 0    
  }

  addNewItem(activeDayId,newItem)
  onClose()
}

function addApproach(){
setApproaches([...approaches, 
{
id:getRandomInt(0,100000),
reps:0,
weight:0
}])
}
function handleInputChange(id,field,value){
    setApproaches(prev=>prev.map((item)=>(
        item.id===id?{...item,[field]:value}:item
    )))
    
}

const getLables=()=>{
switch(exerciseCategory){
    case"power":
    return {field1:"Вес(кг)",field2:"Повторения"}
    case"cardio":
    return {field1:"Дистанция (м)",field2:"Время(сек)"}
    case"yoga":
    return {field1:"Время(сек)",field2:"Вдохи"}
     case"warmup":
    return {field1:"Время(сек)",field2:"Повторения"}

}
}
const labels=getLables()

  return (
    <dialog ref={dialogRef} className={`${styles.modal} ${styles.active}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <header className={styles.modalHeader}>
          <h2>{exerciseName}</h2>
          <p>Заполните данные упражнения</p>
        </header>

        <div className={styles.setsList}>
            {approaches.map((item,index)=>(
            <div  key={item.id} className={styles.setItem}>
                <div className={styles.countOfApproach}>{index+1}</div>
               <div className={styles.inputGroup}>
                {}
              <label>{labels.field1}</label>
              <input type="number" className={styles.input} value={item.weight} onChange={(e)=>handleInputChange(item.id,'weight',e.target.value)} placeholder="0" />
            </div>
            <div className={styles.inputGroup}>
              <label>{labels.field2}</label>
              <input type="number" className={styles.input} value={item.reps} onChange={(e)=>handleInputChange(item.id,'reps',e.target.value)} placeholder="10" />
            </div>
            <button className={styles.addSetBtn } onClick={addApproach} >
              <i className="fas fa-plus"></i>
            </button>
          </div>

            ))}
         
        </div>

        <button className={styles.saveBtn} onClick={handleAddExercise}>
          Сохранить
        </button>
      </div>
    </dialog>
  )
}
