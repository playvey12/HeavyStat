import React, { useState } from 'react'
import { footerNavItems } from '../../utils/mockData'
import styles from './FooterComp.module.css'

import { NavLink } from 'react-router-dom';
export default function FooterComp() {
 return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
      <nav className={styles.bottomNav}>
        {footerNavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => 
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
