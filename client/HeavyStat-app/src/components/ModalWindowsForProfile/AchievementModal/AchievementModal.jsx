import React, { useEffect, useRef } from 'react'
import styles from './AchievementModal.module.css'
import { achievements } from '../../../utils/mockData'


export default function AchievementModal({onClose}) {

  const dialogRef = useRef(null)

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
    }, [])
     const unlockedCount = achievements.filter(a => a.unlocked).length
    const totalCount = achievements.length
    const progressPercent = (unlockedCount / totalCount) * 100

   return (
        <dialog ref={dialogRef} className={styles.modal} onClose={onClose}>
            <div className={styles.modalContent}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>

                <div className={styles.modalHeader}>
                    <div className={styles.headerIcon}>
                        <i className="fas fa-award"></i>
                    </div>
                    <h2>Достижения</h2>
                    <p>Коллекция ваших наград</p>
                </div>

                <div className={styles.achievementsGrid}>
                    {achievements.map((item) => (
                        <div key={item.id} className={`${styles.achievementCard} ${item.unlocked ? styles.unlocked : styles.locked}`}>
                            <div className={styles.achievementIcon}>
                                <i className={item.icon}></i>
                            </div>
                            <div className={styles.achievementInfo}>
                                <span className={styles.achievementTitle}>{item.title}</span>
                                <span className={styles.achievementDesc}>{item.description}</span>
                            </div>
                            {item.unlocked && (
                                <div className={styles.checkMark}>
                                    <i className="fas fa-check-circle"></i>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button className={styles.closeBtnMain} onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </dialog>
    )

}
