import React from 'react'
import styles from './ProgressComp.module.css'
import HeaderComp from '../../components/ComponentsForProgress/HeaderComp/HeaderComp'
import ExerciseChartsComp from '../../components/ComponentsForProgress/ExerciseChartsComp/ExerciseChartsComp'
import AddUserWeight from '../../components/ComponentsForProgress/AddUserWeight/AddUserWeight'
import UserWeightChartsComp from '../../components/ComponentsForProgress/UserWeightChartsComp/UserWeightChartsComp'


export default function ProgressComp() {
  return (
  <div className={styles.progressContainer}>
     <HeaderComp/>
      <section className={styles.mainChartCard}>
       <ExerciseChartsComp/>
      </section>
      <div className={styles.progressGrid}>
       
        <div className={styles.weightCard}>
         <AddUserWeight/>
        </div>

        <div className={styles.historyCard}>
          <UserWeightChartsComp/>
        </div>
      </div>
    </div>
  )
}
