import React, { useEffect, useRef, useState } from 'react'
import styles from './ProfileSettingsModalComp.module.css'
import { useUser } from '../../../utils/contexts/userContext/userContext'

export default function ProfileSettingsModalComp({onClose}) {
const {userName,setUserName,telegrammUserName,setTgUserName,avatarUrl,setAvatarUrl,updateUserOnServer,updateUserTgName,updateAvatar   }=useUser()

  const dialogRef=useRef(null)

  useEffect(()=>{
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  },[])

  function changeUserName(e){
setUserName(e.target.value)
  }
  
function changeTgUserName(e){
setTgUserName(e.target.value)
  }
  
  function changeUserAvatar(e) {
    let file = e.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
            setAvatarUrl(reader.result)  
        }
        reader.readAsDataURL(file)
    }
}
  
async function saveUserData(){
  await updateUserOnServer(userName)
   await updateUserTgName(telegrammUserName)
   await updateAvatar(avatarUrl)


   onClose();
}


  return (
<>
     <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    />

    <dialog  ref={dialogRef}  id="settingsModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <header className={styles.modalHeader}>
          <h2 style={{ fontSize: '22px', width: '100%', textAlign: 'center', paddingBottom: '20px' }}>
      Настройки профиля
          </h2>
        </header>

        <div className={styles.modalBody}> 
          <div className={styles.avatarEdit}>
            <div className={styles.avatarWrapper}>
             <img src={`${avatarUrl}`}alt="avatar" className={styles.avatarImg} />

              <label htmlFor="modalAvatarInput" className={styles.editBadge}>
                <i className="fas fa-camera"></i>
              </label>
              <input type="file" id="modalAvatarInput" onChange={changeUserAvatar} style={{ display: 'none' }} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Имя пользователя</label>
            <input type="text" className={styles.modalInput} onChange={changeUserName} value={userName} placeholder='Например Алексей'/>
          </div>

          <div className={styles.formGroup}>
            <label>Telegramm username</label>
            <input type="text" value={telegrammUserName}  onChange={changeTgUserName} className={styles.modalInput} placeholder='@bomba2004' />
          </div>

          <button onClick={saveUserData} className={styles.saveModalBtn}>Сохранить изменения</button>
        
        </div>
      </div>
    </dialog>
    </>
  )
}