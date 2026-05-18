import React from 'react'
import styles from './EmptyDayComp.module.css'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'

export default function EmptyDayComp({ dayName,onBackToDaySelect }) {
  const { activeDayId, setActiveDay } = usePlan()




  return (
    <div className={styles.emptyDayContainer}>
      <div className={styles.emptyIconWrapper}>
        <div className={styles.calendarCard}>
          <i className="fas fa-calendar-day"></i>
        </div>
        <div className={styles.floatingBadge}>
          <i className="fas fa-dumbbell"></i>
        </div>
      </div>
      
      <h3 className={styles.emptyTitle}>Нет тренировки</h3>
      <p className={styles.emptyText}>
        Для <span className={styles.dayHighlight}>{dayName || 'этого дня'}</span> еще нет упражнений
      </p>
      <button className={styles.selectDayButton} onClick={onBackToDaySelect}>
        <i className="fas fa-calendar-alt"></i>
        <span>Выбрать другой день</span>
      </button>
      
      
    </div>
  )
}