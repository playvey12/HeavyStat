import React, { useState } from 'react'
import styles from './ExerciseActionsBtnComp.module.css'
import AddExerciseModalComp from '../../ModalWindowsForTrainPlan/AddExerciseModal/AddExerciseModalComp'
import GeneratePlanModal from "../../ModalWindowsForTrainPlan/GeneratePlan/GeneratePlanModal"
import TrainPlanTypeModal from "../../ModalWindowsForTrainPlan/TrainPlanTypeModal/TrainPlanTypeModal"



export default function ExerciseActionsBtnComp() {

const [activeModal,setactiveModal]=useState(null)


  return (
    <>
       <button className={styles.addExerciseBtn} onClick={()=>setactiveModal(1)}>
                  <i className="fas fa-plus-circle"></i> Добавить
                </button>
                <button onClick={()=>setactiveModal(2)} className={styles.generatePlanBtn}>
                  <i className="fa-solid fa-wand-sparkles"></i> Сгенерировать
                </button>
                { activeModal===1&&(
                           <AddExerciseModalComp
                           onClose={()=>setactiveModal(null)}
                           />
                      )
                      }
                      { activeModal===2&&(
                           <TrainPlanTypeModal
                           onClose={()=>setactiveModal(null)}
                           />
                      )
                      }
    </>
    
  )
}
