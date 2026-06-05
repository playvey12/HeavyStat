import React, { useEffect, useRef, useState } from 'react'
import styles from './TrainPlanTypeModal.module.css'
import GeneratePlanModal from '../GeneratePlan/GeneratePlanModal'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'
import PlanService from '../../../services/PlanService/PlanService'

export default function TrainPlanTypeModal({ onClose }) {
  const dialogRef = useRef(null)
  const [selectedType, setSelectedType] = useState(null)
  const [planTypes, setPlanTypes] = useState([])
  const { setExercises,activeDayId } = usePlan()
  const planService = new PlanService()
const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
    loadPlanTypes()
  }, [])



  const loadPlanTypes = async () => {
    const types = await planService.getPlanTypes()
    setPlanTypes(types)
  }



const handleSelectType = async (typeId) => {
  if (isGenerating) return;
  
  setIsGenerating(true);
  
  try {

    const updatedExercises = await planService.generatePlan(typeId);
  
    setExercises([...updatedExercises]);
    
    setSelectedType(typeId);
    
  } catch (error) {
    console.error("Ошибка при перезаписи тренировочного плана:", error);
  } finally {
    setIsGenerating(false);
  }
};
  return (
    <>
      <dialog ref={dialogRef} className={styles.modal} onClose={onClose}>
        <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={onClose}>×</button>

          <div className={styles.modalHeader}>
            <div className={styles.headerIcon}>
              <i className="fas fa-dumbbell"></i>
            </div>
            <h2>Выберите тип тренировок</h2>
            <p>Выберите подходящий формат тренировок</p>
          </div>

          <div className={styles.plansGrid}>
            {planTypes.map((plan) => (
              <div key={plan.id} className={styles.planCard} onClick={() => handleSelectType(plan.id)}>
                <div className={styles.planIcon}>
                  <i className={plan.icon}></i>
                </div>
                <div className={styles.planInfo}>
                  <span className={styles.planName}>{plan.name}</span>
                  <span className={styles.planDesc}>{plan.desc}</span>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
            ))}
          </div>
        </div>
      </dialog>
      {selectedType && (
        <GeneratePlanModal onClose={() => setSelectedType(null)} />
      )}
    </>
  )
}