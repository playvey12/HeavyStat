
import React from 'react';
import styles from './ProfileComp.module.css';
import ProfileListBtnComp from '../../components/ComponentsForProfile/ProfileListButtons/ProfileListBtnComp';
import { useUser } from '../../utils/contexts/userContext/userContext';
import UserStatsComp from '../../components/ComponentsForProfile/UserStatsComp/UserStatsComp';

export default function ProfileComp() {
  const {userName,telegrammUserName,avatarUrl}=useUser()
  
  return (
    <div className={styles.container}>
      <header className={styles.profileHeader}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatarRing}>
            <img src={`${avatarUrl}`} alt="avatar" className={styles.avatarImg} />

            <span className={styles.levelBadge}>Level 67</span>
          </div>
        </div>
        <h1 className={styles.userName}>{userName}</h1>
        <h1 className={styles.tgUserName}>{telegrammUserName}</h1>
      </header>

      <section className={styles.statsCard}>

        <UserStatsComp/>
      </section>
      
      <nav className={styles.menuList}>
        <ProfileListBtnComp />
      </nav>
      
      <div className={styles.version}>V.1.1.0</div>
      
    </div>
    
  );
}