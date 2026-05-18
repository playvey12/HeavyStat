import React, { useEffect, useRef } from 'react'
import styles from './GeneratePlanModal.module.css'


export default function GeneratePlanModal({onClose,exerciseData}) {
 const dialogRef = useRef(null)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
       const timer = setTimeout(() => {
      if (dialogRef.current) {
        dialogRef.current.close()
      }
      onClose()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])


  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.loadingContainer}>
          <div className={styles.animationWrapper}>
            <div className={styles.barbellWrapper}>
              <i className="fas fa-dumbbell"></i>
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className={styles.stickFigure}>
              <i className="fas fa-user"></i>
            </div>
          </div>

          <h3 className={styles.loadingTitle}>Генерация плана</h3>
          <p className={styles.loadingText}>ИИ анализирует ваши данные...</p>
          
          <div className={styles.loader}>
            <div className={styles.loaderBar}></div>
          </div>
        </div>
      </div>
    </dialog>
  )
}