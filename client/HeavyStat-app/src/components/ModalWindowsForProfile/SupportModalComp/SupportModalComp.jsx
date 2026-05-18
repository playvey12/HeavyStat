import React, { useEffect, useRef } from 'react'
import styles from './SupportModalComp.module.css'


export default function SupportModalComp({onClose}) {

const dialogRef=useRef(null)
useEffect(()=>{
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  },[])


const copyEmail = () => {
    navigator.clipboard.writeText('supheavylift@gmail.com')
  }



  return (
<>

   
    <dialog  ref={dialogRef} id="helpModal" className={`${styles.modal} ${styles.active}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={()=>onClose()}>×</button>

        <header className={styles.modalHeader}>
          <h2>Помощь</h2>
        </header>

        <div className={styles.modalBody} style={{ textAlign: 'center' }}>
          <p className={styles.description}>
            Свяжитесь с нами по любым вопросам
          </p>

          <div className={styles.helpItem}>
            <div className={styles.helpItemLeft}>
              <i className={`fas fa-envelope ${styles.mailIcon}`}></i>
              <div className={styles.helpItemText}>
                <span className={styles.helpLabel}>Email</span>
                <span className={styles.helpValue}>supheavylift@gmail.com</span>
              </div>
            </div>
            <button onClick={copyEmail} className={styles.copyBtn}>
              Копировать
            </button>
          </div>

          <button className={styles.saveModalBtn} onClick={()=>onClose()}>
            Закрыть
          </button>
        </div>
      </div>
    </dialog>
    </>
  )
}
  