import React, { useEffect, useRef, useState } from 'react'  // ← добавь useState
import styles from './AiDataModalComp.module.css'
import { useUser } from '../../../utils/contexts/userContext/userContext'

export default function AiDataModalComp({ onClose }) {
  const { aiData, updateAiDataOnServer } = useUser()
  const dialogRef = useRef(null)

  // Локальное состояние для формы
  const [localData, setLocalData] = useState({
    weight: aiData?.userWeightForAI || 0,
    height: aiData?.userHeightForAI || 0,
    age: aiData?.userAgeForAI || 0,
    experience: aiData?.userSkillForAI || 0,
    injuries: aiData?.userInjuriesForAI || "Нету"
  })

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  function handleChange(field, value) {
    setLocalData(prev => ({ ...prev, [field]: value }))
  }

  function handleSave() {
    updateAiDataOnServer('userWeightForAI', Number(localData.weight))
    updateAiDataOnServer('userHeightForAI', Number(localData.height))
    updateAiDataOnServer('userAgeForAI', Number(localData.age))
    updateAiDataOnServer('userSkillForAI', Number(localData.experience))
    updateAiDataOnServer('userInjuriesForAI', localData.injuries)
    onClose()
  }

  return (
   <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
      <dialog ref={dialogRef} className={styles.modalOverlay} id="aiDataModal">
        <div className={styles.modalContent}>
          <button className={styles.modalClose} onClick={onClose}>×</button>

          <div className={styles.modalHeader}>
            <div className={styles.headerIcon}>
              <i className="fas fa-robot"></i>
            </div>
            <h2>AI данные</h2>
            <p>Заполните информацию для AI помощника</p>
          </div>

          <div className={styles.aiInputsForm}>
            <div className={styles.inputGroup}>
              <label>Вес (кг)</label>
              <input 
                type="number" 
                value={localData.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
                placeholder="67"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Рост (см)</label>
              <input 
                type="number" 
                value={localData.height}
                onChange={(e) => handleChange('height', e.target.value)}
                placeholder="184"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Возраст</label>
              <input 
                type="number" 
                value={localData.age}
                onChange={(e) => handleChange('age', e.target.value)}
                placeholder="22"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Опыт (мес)</label>
              <input 
                type="number" 
                value={localData.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                placeholder="5"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Травмы</label>
              <input 
                type="text" 
                value={localData.injuries}
                onChange={(e) => handleChange('injuries', e.target.value)}
                placeholder="Например: боли в колене..."
              />
            </div>

            <button type="button" className={styles.btnSave} onClick={handleSave}>
              Сохранить
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}