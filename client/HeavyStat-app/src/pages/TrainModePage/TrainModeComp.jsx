import React, { useState } from 'react'
import styles from './TrainModeComp.module.css'
import TimerForTrainModeComp from '../../components/ComponentsForTrainMode/TimerForTrainModeComp.jsx/TimerForTrainModeComp'
import TrainModeExerciseListComp from '../../components/ComponentsForTrainMode/TrainModeExerciseList/TrainModeExerciseListComp'
import MainCompTrainPlan from '../../components/ComponentsForTrainMode/MainCompTrainPlan/MainCompTrainPlan'
import SelectDayModalComp from '../../components/ModalWindowsForTrainMode/SelectDayModalComp/SelectDayModalComp'
import { usePlan } from '../../utils/contexts/trainPlanContext/trainPlanContext'
import WorkoutResultsModal from '../../components/ModalWindowsForTrainMode/WorkoutResultsModal/WorkoutResultsModalComp'
import StopTrainModal from '../../components/ModalWindowsForTrainMode/ConfirmStopTrain/StopTrainModal'
import { useTrainMode } from '../../utils/contexts/trainModeContext/trainModeContext'

export default function TrainModeComp() {
  const { activeDayId, setActiveDay } = usePlan()
  
  const {activeModal, setActiveModal,isWorkoutActive, setIsWorkoutActive} = useTrainMode(null)

  const handleBackToDaySelect = () => {
    setActiveDay(null)
  }

  function finishWorkout(){
      setIsWorkoutActive(false) 
    setActiveModal(2) 
  
  }
   function handleCloseStopModal() {
    setIsWorkoutActive(true) 
    setActiveModal(null)
  }
  return (
    <>
      <div className={styles.workoutScreenContainer}>
        <div className={styles.workoutContent}>
          <div className={styles.sessionHeader}>
            <TimerForTrainModeComp isActive={isWorkoutActive} />
          </div>
          <div className={styles.mainSpacer}>
            {activeDayId ? (
              <>
                <TrainModeExerciseListComp onBackToDaySelect={handleBackToDaySelect} />
                <div className={styles.sessionActions}>
                  {!isWorkoutActive ? (
                    <button 
                      className={styles.btnSecondaryLargeDay} 
                      onClick={() => setIsWorkoutActive(true)}
                    >
                      Начать тренировку
                    </button>
                  ) : (
                    <button 
                      className={styles.btnSecondaryStopTrain} 
                      onClick={() => finishWorkout()}
                    >
                      Закончить тренировку
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <MainCompTrainPlan />
                <div className={styles.sessionActions}>
                  <button 
                    className={styles.btnSecondaryLargeDay} 
                    onClick={() => setActiveModal(1)}
                  >
                    Выбрать день
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {activeModal === 1 && (
        <SelectDayModalComp onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 2 && (
        <StopTrainModal onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}