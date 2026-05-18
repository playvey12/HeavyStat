import React from 'react'
import styles from './ErorComp.module.css'

export default function ErorComp({ onNavigate }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorRing}>
          <div className={styles.errorNumber}>
            <span>4</span>
            <i className="fas fa-dumbbell"></i>
            <span>4</span>
          </div>
        </div>

        <h1 className={styles.errorTitle}>Страница не найдена</h1>
        <p className={styles.errorDescription}>
          Упс! Похоже, вы взяли слишком большой вес и эта страница не выдержала...
        </p>

        <button 
          className={styles.homeBtn}
          onClick={() => onNavigate && onNavigate('profile')}
        >
          <i className="fas fa-home"></i>
          <span>Вернуться в профиль</span>
        </button>

        <div className={styles.motivationQuote}>
          <i className="fas fa-quote-left"></i>
          <p>Даже когда падаешь, главное — подняться и продолжить путь</p>
        </div>
      </div>
    </div>
  )
}