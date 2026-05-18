import React, { useState } from 'react'
import styles from './AddUserWeight.module.css'
import { useUser } from '../../../utils/contexts/userContext/userContext'
import { useProgress } from '../../../utils/contexts/progressContext/progressContext'

export default function AddUserWeight() {
    const { userWeightData, setUserWeightData, updateUserWeightsDataOnServer } = useUser()


    const{addWeightToServer,deleteWeightPoint,weightsHistory }=useProgress()


    const weight = userWeightData?.userWeight || 0
    const startWeight = userWeightData?.userStartWeight || 40
    const goalWeight = userWeightData?.userGoalWeight || 90
    
    const percentage = ((weight - startWeight) / (goalWeight - startWeight)) * 100
    
    const changeWeight = (step) => {
        const newWeight = +(weight + step).toFixed(1)
        setUserWeightData({ ...userWeightData, userWeight: newWeight })
    }
    
    const handleSave = () => {
        updateUserWeightsDataOnServer('userWeight', weight)
        addWeightToServer(weight)
    }
    const handleDeleteLast = () => {
  if (weightsHistory.length > 0) {
    const lastId = weightsHistory[weightsHistory.length - 1]._id; 
    deleteWeightPoint(lastId);
  }
};
    
    return (
        <> 
            <h2>Мой вес</h2>
            <span className={styles.subtitle}>Текущий вес тела</span>
            <div className={styles.weightSelector}>
                <button className={styles.weightBtn} onClick={() => changeWeight(-0.1)}>-</button>
                <div className={styles.weightDisplay}>
                    <span className={styles.weightValue}>{weight}</span>
                    <span className={styles.weightUnit}>кг</span>
                </div>
                <button className={styles.weightBtn} onClick={() => changeWeight(0.1)}>+</button>
            </div>
            <input 
                type="range" 
                className={styles.weightSlider} 
                min={startWeight} 
                max={goalWeight}
                value={weight}
                onChange={(e) => setUserWeightData({ ...userWeightData, userWeight: Number(e.target.value) })} 
                style={{
                    '--progress': `${percentage}%`
                }}
            />
        
          

            <div className={styles.sliderLabels}>
                <span>{startWeight} кг</span>
                <span>{goalWeight} кг</span>
            </div>
              <div className={styles.btnContainer}>
    
            <button className={styles.saveWeightBtn} onClick={handleSave}>
                <i className="fas fa-save"></i>
                Сохранить в график
            </button>
            <button className={styles.saveWeightBtn} onClick={handleDeleteLast}>
                <i className="fas fa-save"></i>
                Удалить
            </button>
            </div>
        </>
    )
}