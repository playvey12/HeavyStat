import React, { useEffect, useRef, useState } from 'react'
import styles from './SelectDayModalComp.module.css'
import { daysOfWeek } from '../../../utils/mockData'

import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'


export default function SelectDayModalComp({onClose}) {
  const dialogRef = useRef(null)
const {activeDayId,setActiveDay}=usePlan()



  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

   const handleSelectDay = (id) => {
    setActiveDay(id); 
    onClose();       
  };
  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.modalHeader}>
          <h2>Выберите день</h2>
          <p>Выберите день для тренировки</p>
        </div>

        <div className={styles.daysList}>
          {daysOfWeek.map((day) => (
            <button onClick={()=>handleSelectDay(day.id)} key={day.id} className={styles.dayOption}>
              <span className={styles.dayName}>{day.name}</span>
             
              <i className="fas fa-chevron-right"></i>
            </button>
          ))}
        </div>
      </div>
    </dialog>
  )
}