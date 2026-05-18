
import React, { useEffect, useState, useRef } from 'react'
import styles from './TrainModeExerciseListComp.module.css'
import { usePlan } from '../../../utils/contexts/trainPlanContext/trainPlanContext'
import EmptyDayComp from '../EmptyDayComp/EmptyDayComp'
import { useTrainMode } from '../../../utils/contexts/trainModeContext/trainModeContext'
import WorkoutResultsModalComp from '../../ModalWindowsForTrainMode/WorkoutResultsModal/WorkoutResultsModalComp'
import SaveRecordModal from '../../ModalWindowsForTrainMode/SaveRecordModal/SaveRecordModal'
import EditExerciseModalComp from '../../ModalWindowsForTrainMode/EditExerciseModal/EditExerciseModalComp'

export default function TrainModeExerciseListComp({ onBackToDaySelect }) {
  const { filteredExercises, activeDayId, saveNewWeight } = usePlan()
  const [exerciseQueue, setExerciseQueue] = useState([])
  const [activeExercise, setActiveExercise] = useState(null)
  const [isRemoving, setIsRemoving] = useState(false)
  const [isEntering, setIsEntering] = useState(false)
  const [completedExercise, setCompletedExercise] = useState(null)
  const [isFinished, setIsFinished] = useState(false)
  const { setTotalTon, isWorkoutActive, completeWorkout, setIsWorkoutActive } = useTrainMode()
  const [isNewRecord, setIsNewRecord] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentApproachIndex, setCurrentApproachIndex] = useState(0)

  const activeExerciseIdRef = useRef(null)
  const currentApproachIndexRef = useRef(0)

  useEffect(() => {
    currentApproachIndexRef.current = currentApproachIndex
  }, [currentApproachIndex])


  useEffect(() => {
    if (filteredExercises && filteredExercises.length > 0) {
    
      const shouldReset = !activeExercise || activeExercise.id !== filteredExercises[0]?.id
      
      if (shouldReset) {
        const firstExercise = JSON.parse(JSON.stringify(filteredExercises[0]))
        const queueCopy = filteredExercises.slice(1).map(ex => JSON.parse(JSON.stringify(ex)))
        
        setActiveExercise(firstExercise)
        activeExerciseIdRef.current = firstExercise.id
        setExerciseQueue(queueCopy)
        setCurrentApproachIndex(0)
        currentApproachIndexRef.current = 0
      }
    } else {
      setActiveExercise(null)
      setExerciseQueue([])
      setCurrentApproachIndex(0)
      currentApproachIndexRef.current = 0
      activeExerciseIdRef.current = null
    }
  }, [filteredExercises, activeDayId])


  useEffect(() => {
    if (activeExercise && filteredExercises.length > 0) {
     
      const updatedExercise = filteredExercises.find(ex => ex.id === activeExercise.id)
      
      if (updatedExercise && JSON.stringify(updatedExercise.exerciseApproaches) !== JSON.stringify(activeExercise.exerciseApproaches)) {
      
        setActiveExercise(prev => ({
          ...prev,
          exerciseApproaches: updatedExercise.exerciseApproaches,
          exerciseWeights: updatedExercise.exerciseApproaches.map(a => a.weight),
          exerciseWeight: updatedExercise.exerciseApproaches[currentApproachIndexRef.current]?.weight || 0
        }))
      }
    }
  }, [filteredExercises, activeExercise?.id])

const handleWeightUpdated = (newWeight) => {
    if (activeExercise && currentApproach) {
    console.log('saveNewWeight params:', {
    exerciseId: activeExercise._id,
    approachId: currentApproach.id,
    newWeight
})
        saveNewWeight(activeExercise._id, currentApproach.id, newWeight)
    }
}

  if (filteredExercises.length === 0) {
    return <EmptyDayComp dayName="Текущего дня" onBackToDaySelect={onBackToDaySelect} />
  }

  function confirmationOfApproach() {
    if (!activeExercise) return

    const currentWeight = activeExercise.exerciseWeights?.[currentApproachIndex] || activeExercise.exerciseWeight || 0
    const currentReps = activeExercise.exerciseApproaches?.[currentApproachIndex]?.reps || 0
    const approachTon = currentWeight * currentReps
    setTotalTon(prevTon => approachTon + prevTon)

    if (currentApproachIndex + 1 < activeExercise.exerciseApproaches.length) {
      setCurrentApproachIndex(prev => prev + 1)
    } else {
      setCompletedExercise(activeExercise.exerciseName)
      setIsRemoving(true)
      
      setTimeout(() => {
        if (exerciseQueue && exerciseQueue.length > 0) {
          setIsEntering(true)
          setTimeout(() => {
            const nextExercise = exerciseQueue[0]
            setActiveExercise(nextExercise)
            activeExerciseIdRef.current = nextExercise.id
            setExerciseQueue(prev => prev.slice(1))
            setCurrentApproachIndex(0)
            currentApproachIndexRef.current = 0
            setIsRemoving(false)
            setIsEntering(false)
            setCompletedExercise(null)
          }, 200)
        } else {
          setActiveExercise(null)
          setIsRemoving(false)
          setCompletedExercise(null)
          setIsFinished(true)
          setIsWorkoutActive(false)
        }
      }, 300)
    }
  }

  const currentApproach = activeExercise?.exerciseApproaches?.[currentApproachIndex]
  const currentWeight = currentApproach?.weight || 0
  const currentReps = currentApproach?.reps || 0
  const completedApproaches = currentApproachIndex
  const totalApproaches = activeExercise?.exerciseApproaches?.length || 0

  const nextExercise = exerciseQueue?.[0]

  if (isFinished) {
    return <WorkoutResultsModalComp onClose={completeWorkout} onStopWorkout={completeWorkout} />
  }

  return (
    <>
      <div className={styles.exercisesWrapper}>
        <button className={styles.backToDayBtn} onClick={onBackToDaySelect}>
          <i className="fas fa-arrow-left"></i>
          <span>Вернуться к выбору дня</span>
        </button>

        {activeExercise && (
          <div className={`${styles.exerciseCardActive} ${isRemoving ? styles.removing : ''} ${isEntering ? styles.entering : ''}`}>
            <div className={styles.cardHeader}>
              <span className={styles.badgeActive}>
                {isRemoving ? 'ЗАВЕРШЕНО!' : 'ТЕКУЩЕЕ УПРАЖНЕНИЕ'}
              </span>
              <i className="fas fa-dumbbell red-icon"></i>
            </div>
            
            {completedExercise && isRemoving && (
              <div className={styles.completedBadge}>
                <i className="fas fa-check-circle"></i>
                <span>{completedExercise} завершено!</span>
              </div>
            )}
               
            <h2 className={styles.exerciseTitle}>{activeExercise.exerciseName}</h2>
    
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>ВЕС (КГ)</span>
                <div className={styles.statValue}>
                  <span className={styles.weightValue}>{currentWeight}</span>
                  <span className={styles.unit}>КГ</span>
                </div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>ПОВТОРЕНИЯ</span>
                <div className={styles.repsBlock}>
                  <span className={styles.repsValue}>{currentReps}</span>
                  <span className={styles.repsUnit}>раз</span>
                </div>
              </div>
            </div>

            <div className={styles.approachesProgress}>
              <div className={styles.approachesHeader}>
                <span className={styles.approachesLabel}>ПОДХОДЫ</span>
                <span className={styles.approachesCounter}>
                  {completedApproaches} / {totalApproaches}
                </span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ 
                    width: totalApproaches > 0 ? `${(completedApproaches / totalApproaches) * 100}%` : '0%'
                  }}
                ></div>
              </div>
            </div>

            <div className={styles.actionButtonsRow}>
              <button  
                disabled={!isWorkoutActive || isRemoving}
                className={styles.btnMiniActionSave} 
                onClick={() => setIsNewRecord(true)}
              >
                <i className="fas fa-chart-line"></i>
                <span>График</span>
              </button>
              <button 
                onClick={() => setIsEditing(true)} 
                disabled={!isWorkoutActive || isRemoving} 
                className={styles.btnEditWeight}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button 
                onClick={confirmationOfApproach} 
                disabled={!isWorkoutActive || isRemoving} 
                className={styles.btnConfirmComplete}
              >
                <i className="fa-regular fa-circle-check"></i>
              </button>
            </div>
          </div>
        )}

        <div className={styles.queueSection}>
          <div className={styles.queueHeader}>
            <span className={styles.queueTitle}>ОЧЕРЕДЬ УПРАЖНЕНИЙ</span>
          </div>

          <div className={styles.exercisesScrollContainer}>
            {exerciseQueue?.map((exercise, idx) => (
              <div 
                key={exercise._id} 
                className={`${styles.exerciseCardMini} ${nextExercise?.id === exercise.id && isRemoving ? styles.movingToActive : ''}`}
              >
                <div className={styles.miniIcon}>
                  <i className="fas fa-dumbbell red-icon"></i>
                </div>
                <div className={styles.queueBar}>
                  <span className={styles.miniTitle}>{exercise.exerciseName}</span>
                  <span className={styles.miniStatus}>
                    {nextExercise?.id === exercise.id && isRemoving ? 'СЛЕДУЮЩЕЕ →' : 'ОЖИДАНИЕ'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isNewRecord && (
        <SaveRecordModal onClose={() => setIsNewRecord(false)} exerciseName={activeExercise?.exerciseName} />
      )}

      {isEditing && activeExercise && currentApproach && (
        <EditExerciseModalComp 
          onClose={() => setIsEditing(false)}  
          exerciseName={activeExercise.exerciseName}
          currentWeight={currentWeight}
          onWeightUpdated={handleWeightUpdated}
        />
      )}
    </>
  )
}