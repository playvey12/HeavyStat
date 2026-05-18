import React from 'react'
import styles from './TrainPlanComp.module.css'
import TrainDaysHeaderComp from '../../components/ComponentsForTtainPlan/TrainDaysHeader/TrainDaysHeaderComp'
import ExerciseItemComp from '../../components/ComponentsForTtainPlan/ExerciseItemComp/ExerciseItemComp'
import ExerciseActionsBtnComp from '../../components/ComponentsForTtainPlan/ExerciseActionsBtnComp/ExerciseActionsBtnComp'


export default function TrainPlanComp() {



  return (
    <div className={styles.trainPlanContainer}>
      <header className={styles.planHeader}>
        <div className={styles.headerText}>
          <h1>План тренировок</h1>
          <p>Твоя программа на сегодня</p>
        </div>
      </header>
      <div className={styles.calendarScroll}>
           <TrainDaysHeaderComp/>
        
      </div>

      <section className={styles.routineSection}>
        <h2 className={styles.sectionTitle}>Тренировка</h2>
        <div className={styles.exerciseList}>
<ExerciseItemComp/>
        </div>

        <div className={styles.actionButtons}>
         <ExerciseActionsBtnComp/>
        </div>
      </section>
    </div>
  )
}