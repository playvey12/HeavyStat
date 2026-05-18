import React, { useEffect, useRef, useState } from 'react'
import styles from './SaveRecordModal.module.css'
import { useProgress } from '../../../utils/contexts/progressContext/progressContext'

export default function SaveRecordModal({ onClose, exerciseName }) {
  const dialogRef = useRef(null)
const {addRecordToServer}=useProgress()
const [localValue, setLocalValue] = useState('');
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

function handleNewRecord(e){
  setLocalValue(e.target.value)
}
function handleSaveNewRecord(){
  if (localValue && exerciseName) {
      addRecordToServer(exerciseName, localValue);
       setLocalValue('')
      onClose(); 
    }
}
  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.modalHeader}>
          <div className={styles.trophyIcon}>
            <i className="fas fa-trophy"></i>
          </div>
          <h2>Новый рекорд!</h2>
          <p>{exerciseName || 'Поздравляем с новым достижением!'}</p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.inputLabel}>Значение рекорда</label>
          <input 
            type="number" 
            className={styles.recordInput} 
            placeholder="0.0"
            step="0.1"
            value={localValue}
            onChange={handleNewRecord}
          />
          <span className={styles.inputUnit}>кг</span>
        </div>

        <button onClick={handleSaveNewRecord} className={styles.saveBtn}>
          <i className="fas fa-save"></i>
          Сохранить рекорд
        </button>
      </div>
    </dialog>
  )
}