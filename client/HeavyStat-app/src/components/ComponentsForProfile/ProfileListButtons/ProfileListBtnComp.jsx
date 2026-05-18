import React, { useState } from 'react';
import styles from './ProfileListBtnComp.module.css';
import { ProfileMenuItems } from '../../../utils/mockData';
import ProfileSettingsModalComp from '../../ModalWindowsForProfile/SettingModalProfile/ProfileSettingsModalComp';
import PrivacyModalWindowComp from '../../ModalWindowsForProfile/PrivacyModalWindow/PrivacyModalWindowComp';
import ThemeModalWindowComp from '../../ModalWindowsForProfile/ThemeModalWindow/ThemeModalWindowComp';
import AiDataModalComp from '../../ModalWindowsForProfile/AiDataModalComp/AiDataModalComp';
import SupportModalComp from '../../ModalWindowsForProfile/SupportModalComp/SupportModalComp';
import BodyMeasurementsModalComp from '../../ModalWindowsForProfile/BodyMeasurementsModal/BodyMeasurementsModalСomp';
import AchievementModal from '../../ModalWindowsForProfile/AchievementModal/AchievementModal';


export default function ProfileListBtnComp() {
const menuItems=ProfileMenuItems
const [activeModal,setactiveModal]=useState(null)



   return (
    <>

       <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    />
    
      {menuItems.map((item) => (
        <button 
          key={item.id}
          className={styles.menuItem}
          onClick={()=>setactiveModal(item.id)}
        >
          <div className={styles.menuIcon}>
            <i className={item.icon}></i>
          </div>
          <div className={styles.menuContent}>
            <span className={styles.menuTitle}>{item.title}</span>
            <span className={styles.menuSubtitle}>{item.subtitle}</span>
          </div>
          
          <i className={`fas fa-chevron-right ${styles.arrow}`}></i>
        </button>
      ))}
{ activeModal===1&&(
           <ProfileSettingsModalComp
           onClose={()=>setactiveModal(null)}
           />
      )
      }
      { activeModal===2&&(
          //  <PrivacyModalWindowComp
          //  onClose={()=>setactiveModal(null)}
          //  />
          <BodyMeasurementsModalComp
          onClose={()=>setactiveModal(null)}
          />
      )
      }
      { activeModal===3&&(
           <ThemeModalWindowComp
           onClose={()=>setactiveModal(null)}
           />
      )
      }
       { activeModal===4&&(
           <AiDataModalComp
           onClose={()=>setactiveModal(null)}
           />
      )
      }
      { activeModal===5&&(
           <SupportModalComp
           onClose={()=>setactiveModal(null)}
           
           />
      )
      },
       { activeModal===6&&(
           <AchievementModal
           onClose={()=>setactiveModal(null)}
           
           />
      )
      }
      
    </>

  );
 
}