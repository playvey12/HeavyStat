import React, { useState } from 'react'

import styles from './TrainDaysHeaderComp.module.css'
import { daysData } from '../../../utils/mockData'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'

export default function TrainDaysHeaderComp() {
const {activeDayId,setActiveDay}=usePlan()

  return (
   daysData.map((item)=>(
           <div key={item.id} className={`${styles.dayCard} ${ activeDayId==item.id?  styles.active : " "}`} onClick={()=>setActiveDay(item.id)}>
             <span className={styles.dayName}>{item.dayName}</span>
             <span className={styles.dayNumber}><i className="fas fa-calendar-day"></i></span>
           </div>
   ))
  )
}
