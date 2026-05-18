import React, { useEffect, useRef } from 'react'
import styles from './EditWeightDataModal.module.css'
import { useUser } from '../../utils/contexts/userContext/userContext'

export default function EditWeightDataModal({ onClose }) {
    const dialogRef = useRef(null)
    const { userWeightData, setUserWeightData, updateUserWeightsDataOnServer } = useUser()
    
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
    }, [])
    
    function handleUserGoalWeight(e) {
        setUserWeightData({ ...userWeightData, userGoalWeight: Number(e.target.value) })
    }
    
    function handleUserStartWeight(e) {
        setUserWeightData({ ...userWeightData, userStartWeight: Number(e.target.value) })
    }
    
    async function handleSave() {
        await updateUserWeightsDataOnServer('userStartWeight', userWeightData.userStartWeight)
        await updateUserWeightsDataOnServer('userGoalWeight', userWeightData.userGoalWeight)
        onClose()
    }
    
    return (
        <dialog ref={dialogRef} className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>

                <div className={styles.modalHeader}>
                    <h2>Настройка веса</h2>
                    <p>Измените целевые показатели</p>
                </div>

                <div className={styles.inputGroup}>
                    <label>Стартовый вес (кг)</label>
                    <input 
                        type="number" 
                        className={styles.input} 
                        onChange={handleUserStartWeight} 
                        value={userWeightData?.userStartWeight || 0} 
                        placeholder="60" 
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label>Целевой вес (кг)</label>
                    <input 
                        type="number" 
                        className={styles.input} 
                        onChange={handleUserGoalWeight} 
                        value={userWeightData?.userGoalWeight || 0} 
                        placeholder="80" 
                    />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.cancelBtn} onClick={onClose}>Отмена</button>
                    <button className={styles.saveBtn} onClick={handleSave}>Сохранить</button>
                </div>
            </div>
        </dialog>
    )
}