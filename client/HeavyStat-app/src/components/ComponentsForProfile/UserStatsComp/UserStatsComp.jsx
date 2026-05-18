import React from 'react'
import styles from './UserStatsComp.module.css'
import { useUser } from '../../../utils/contexts/userContext/userContext'

export default function UserStatsComp() {
const {allStats,setAllStats}=useUser()


  return (
    <>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Тоннаж</span>
                <span className={styles.statValue}>{(allStats.totalTon?.toFixed(1))/1000 || 0}</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Тренировок</span>
                <span className={styles.statValue}>{allStats.totalWorkouts || 0}</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Часов</span>
                <span className={styles.statValue}>{allStats.totalHours?.toFixed(1) || 0}</span>
            </div>
        </>
  )
}
