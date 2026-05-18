import React, { useEffect, useRef } from 'react'
import styles from './ThemeModalWindowComp.module.css'

export default function ThemeModalWindowComp({onClose}) {
const dialogRef=useRef(null)
useEffect(()=>{
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  },[])
  return (
    <dialog ref={dialogRef}  id="themeModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <header className={styles.modalHeader}>
          <div className={styles.langSwitcherMini}>
            <span className={`${styles.langOption} ${styles.active}`}>RU</span>
            <span className={styles.langDivider}>|</span>
            <span className={styles.langOption}>EN</span>
          </div>
          <h2>Тема оформления</h2>
        </header>

        <div className={styles.modalBody}>
          <div className={styles.themeOptions}>
            <div className={`${styles.themeCard} ${styles.active}`}>
              <div className={`${styles.themePreview} ${styles.darkPreview}`}>
                <div className={styles.previewLine}></div>
                <div className={styles.previewDot}></div>
              </div>
              <span>Тёмная</span>
              <i className={`fas fa-check-circle ${styles.selectIcon}`}></i>
            </div>

            <div className={styles.themeCard}>
              <div className={`${styles.themePreview} ${styles.lightPreview}`}>
                <div className={styles.previewLine}></div>
                <div className={styles.previewDot}></div>
              </div>
              <span>Светлая</span>
              <i className={`fas fa-check-circle ${styles.selectIcon}`}></i>
            </div>
          </div>

          <button className={styles.saveModalBtn} onClick={onClose} style={{ marginTop: '20px' }}>
            Сохранить
          </button>
        </div>
      </div>
    </dialog>
  )
}
  
