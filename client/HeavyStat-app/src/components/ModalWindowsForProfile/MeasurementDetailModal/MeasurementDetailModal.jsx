import React, { useEffect, useRef, useState } from 'react'
import styles from './MeasurementDetailModal.module.css'
import { measurementInstructions } from '../../../utils/mockData'
import chestMen from '../../../assets/bodyMeasurements/chestMen.png'
import waistMen from '../../../assets/bodyMeasurements/waistMen.png'
import hipsMen from '../../../assets/bodyMeasurements/hipsMen.png'
import bicepsMen from '../../../assets/bodyMeasurements/bicepsMen.png'
import calfMen from '../../../assets/bodyMeasurements/calfMen.png'
import { useUser } from '../../../utils/contexts/userContext/userContext'

export default function MeasurementDetailModal({ onClose, measurementName }) { 
  const dialogRef = useRef(null)
  const { measurements, updateMeasurementOnServer } = useUser()
  const [newMeasurement, setNewMeasurement] = useState('')

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  
  const getCurrentMeasurement = () => {
    switch(measurementName) {
      case 'Грудь': return measurements.chest
      case 'Талия': return measurements.waist
      case 'Бедра': return measurements.hips
      case 'Бицепс': return measurements.biceps
      case 'Икра': return measurements.calf
      default: return { value: 0, lastValue: 0 }
    }
  }

  const getMeasurementImage = (name) => {
    switch(name) {
      case 'Грудь': return chestMen
      case 'Талия': return waistMen
      case 'Бедра': return hipsMen
      case 'Бицепс': return bicepsMen
      case 'Икра': return calfMen
      default: return bicepsMen
    }
  }

  function handleNewMeasurement(e) {
    setNewMeasurement(e.target.value)
  }

  function handleSave() {
    if (newMeasurement) {
      let key = ''
      switch(measurementName) {
        case 'Грудь': key = 'chest'; break
        case 'Талия': key = 'waist'; break
        case 'Бедра': key = 'hips'; break
        case 'Бицепс': key = 'biceps'; break
        case 'Икра': key = 'calf'; break
        default: return
      }
      updateMeasurementOnServer(key, Number(newMeasurement))
     
    }
    onClose()
  }

  const currentMeasurement = getCurrentMeasurement()

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.measurementImage}>
          <div className={styles.imagePlaceholder}>
            <img src={getMeasurementImage(measurementName)} alt={measurementName} />
          </div>
          <h3 className={styles.measurementTitle}>{measurementName}</h3>
        </div>

        <div className={styles.instructionBox}>
          <div className={styles.instructionHeader}>
            <i className="fas fa-info-circle"></i>
            <span>Как правильно измерить</span>
          </div>
          <p className={styles.instructionText}>
            {measurementInstructions[measurementName] || 'Измерьте сантиметровой лентой, не затягивая слишком сильно.'}
          </p>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.inputLabel}>Сантиметры</label>
          <input 
            type="number" 
            className={styles.measurementInput} 
            placeholder="0.0"
            step="0.1"
            value={newMeasurement}
            onChange={handleNewMeasurement}
          />
          <span className={styles.inputUnit}>см</span>
        </div>

        <div className={styles.previousValueBox}>
          <span className={styles.previousLabel}>Предыдущий замер:</span>
          <span className={styles.previousValue}>{currentMeasurement.lastValue}</span>
        </div>

        <button className={styles.saveBtn} onClick={handleSave}>
          <i className="fas fa-save"></i>
          Сохранить замер
        </button>
      </div>
    </dialog>
  )
}