import React, { useEffect, useRef, useState } from 'react'
import styles from './BodyMeasurementsModalComp.module.css'
import { measurements } from '../../../utils/mockData'
import MeasurementDetailModal from '../MeasurementDetailModal/MeasurementDetailModal'

export default function BodyMeasurementsModalComp({ onClose }) {
  const [froze, setFroze] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  function handleSetFroze(id) {
    setFroze(id)
  }

  const selectedMeasurement = measurements.find(item => item.id === froze)

  return (
    <>
      <dialog ref={dialogRef} className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={onClose}>×</button>

          <div className={styles.modalHeader}>
            <div className={styles.headerIcon}>
              <i className="fas fa-tape"></i>
            </div>
            <h2>Замеры тела</h2>
            <p>Выберите мышцу для замера</p>
          </div>

          <div className={styles.measurementsGrid}>
            {measurements.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleSetFroze(item.id)} 
                className={styles.measurementCard}
              >
                <div className={styles.measurementIcon}>
                  <img src={item.icon} alt={item.name} />
                </div>
                <span className={styles.measurementName}>{item.name}</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            ))}
          </div>
        </div>
      </dialog>

      {froze && selectedMeasurement && (
        <MeasurementDetailModal
          onClose={() => setFroze(null)}
          measurementName={selectedMeasurement.name}
        />
      )}
    </>
  )
}