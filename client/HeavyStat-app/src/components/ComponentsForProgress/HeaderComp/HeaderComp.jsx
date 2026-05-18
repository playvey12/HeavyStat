import React, { useState } from 'react'
import styles from './HeaderComp.module.css'
import EditWeightDataModal from '../../ModalWindowForProgress/EditWeightDataModal'


export default function HeaderComp() {
const [editWeightModal,setEditWeightModal]=useState(null)



  return (
    <>
    <header className={styles.progressHeader}>
           <div className={styles.headerInfo}>
             <h1>Прогресс</h1>
             <p>Отслеживай свои достижения</p>
           </div>
           <button onClick={()=>setEditWeightModal(1)} className={styles.settingsBtn}>
             <i className="fa-solid fa-pen"></i>
           </button>
         </header>
         {editWeightModal&&(
          <EditWeightDataModal
          onClose={()=>setEditWeightModal(null)}
          />
         )} 
         </>
  )
}
