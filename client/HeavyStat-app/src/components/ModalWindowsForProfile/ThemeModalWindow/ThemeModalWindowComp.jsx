import React, { useEffect, useRef } from 'react'
import styles from './ThemeModalWindowComp.module.css'
import { useTheme } from '../../../utils/contexts/themeContext/themeContext'

export default function ThemeModalWindowComp({ onClose }) {
  const dialogRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  function handleSave() {
    onClose()
  }

  return (
    <dialog ref={dialogRef} className={styles.modal} onClick={(e) => { if (e.target === dialogRef.current) onClose() }}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <header className={styles.modalHeader}>
          <h2>Тема оформления</h2>
        </header>

        <div className={styles.modalBody}>
          <div className={styles.themeOptions}>

            <div
              className={`${styles.themeCard} ${theme === 'dark' ? styles.active : ''}`}
              onClick={() => toggleTheme('dark')}
            >
              <div className={`${styles.themePreview} ${styles.darkPreview}`}>
                <div className={styles.previewLine}></div>
                <div className={styles.previewDot}></div>
              </div>
              <span>Тёмная</span>
              <i className={`fas fa-check-circle ${styles.selectIcon}`}></i>
            </div>

            <div
              className={`${styles.themeCard} ${theme === 'light' ? styles.active : ''}`}
              onClick={() => toggleTheme('light')}
            >
              <div className={`${styles.themePreview} ${styles.lightPreview}`}>
                <div className={styles.previewLine}></div>
                <div className={styles.previewDot}></div>
              </div>
              <span>Светлая</span>
              <i className={`fas fa-check-circle ${styles.selectIcon}`}></i>
            </div>

          </div>

          <button className={styles.saveModalBtn} onClick={handleSave} style={{ marginTop: '20px' }}>
            Сохранить
          </button>
        </div>
      </div>
    </dialog>
  )
}