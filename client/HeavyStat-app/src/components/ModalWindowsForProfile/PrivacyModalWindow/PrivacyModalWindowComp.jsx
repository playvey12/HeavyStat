import React, { useEffect, useRef } from 'react'
import styles from './PrivacyModalWindowComp.module.css'
import { useUser } from '../../../utils/contexts/userContext/userContext'


export default function PrivacyModalWindowComp({onClose}) {
const {userOldPassword,setUserOldPassword,userNewPassword,setUserNewPassword,userConfirmPassword ,
  setUserConfirmPassword}=useUser()


const dialogRef=useRef(null)

  useEffect(()=>{
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  },[])

function ConfirmOldPassword(e){
         setUserOldPassword(e.target.value)
}

function ChangePassword(e){
         setUserNewPassword(e.target.value)
  }
  
function ConfirmPassword(e){
  setUserConfirmPassword(e.target.value)
}
    
function savePass(){
   if (userNewPassword.length < 8) {
    console.log("Пароль должен быть не менее 8 символов");
    return;
  }
  
  if (userConfirmPassword.length < 8) {
    console.log("Подтверждение пароля должно быть не менее 8 символов");
    return;
  }

  if (userNewPassword !== userConfirmPassword) {
    console.log("Пароли должны совпадать");
    return;
  }


  
  setUserOldPassword('');
  setUserNewPassword('');
  setUserConfirmPassword('');
  
  onClose(); 

}

  return (
   <> <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    />

    <dialog ref={dialogRef} id="privacyModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <header className={styles.modalHeader}>
          <h2>Приватность</h2>
        </header>

        <div className={styles.modalBody}>
          <div className={`${styles.formGroup} ${styles.formGroupFirst}`}>
            <label>Старый пароль</label>
            <input type="password" id="oldPassword" value={userOldPassword} onChange={ConfirmOldPassword} className={styles.modalInput} placeholder="••••••••" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.newPassLabel}>Новый пароль</label>
            <input type="password" id="newPassword"value={userNewPassword} onChange={ChangePassword} className={styles.modalInput} placeholder="••••••••" />
          </div>

          <div className={styles.formGroup}>
            <label>Подтверждение пароля</label>
            <input type="password" id="confirmPasswordUser" value={userConfirmPassword} onChange={ConfirmPassword} className={styles.modalInput} placeholder="••••••••" />
          </div>

          <hr className={styles.divider} />

          <button className={styles.secondaryBtn} style={{ background: 'transparent', border: '1px solid #ff3b5c', color: '#ff3b5c', width: '100%', padding: '12px', borderRadius: '15px', cursor: 'pointer', fontSize: '13px', marginBottom: '15px' }}>
            <i className="fas fa-user-shield" style={{ marginRight: '8px' }}></i> Выйти из всех устройств
          </button>

          <button  onClick={savePass} className={styles.saveModalBtn}>
            Сохранить
          </button>
        </div>
      </div>
    </dialog>
    </>
  )
}
