import React from 'react'
import styles from './MainCompTrainPlan.module.css'


export default function MainCompTrainPlan() {
  return (
    <div className={styles.emptyState}>
                 <div className={styles.emptyIconWrapper}>
                   <div className={styles.calendarCard}>
                     <i className="fas fa-calendar-alt" style={{ fontSize: '60px', color: 'var(--text-dim)' }}></i>
                   </div>
                   <div className={styles.floatingBadge}>
                     <i className="fas fa-dumbbell"></i>
                   </div>
                 </div>
                 <h3 className={styles.emptyTitle}>Нет активной тренировки</h3>
                 <p className={styles.emptyText}>Выберите день для начала тренировки</p>
               
                
                       </div>
  )
}
