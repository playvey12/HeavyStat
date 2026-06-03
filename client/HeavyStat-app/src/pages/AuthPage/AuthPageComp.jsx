import React, { useEffect } from 'react';
import styles from './AuthPageComp.module.css';

export default function AuthPageComp() {

  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'HeavyStat_bot');
    script.setAttribute('data-size', 'large');

    const authUrl = import.meta.env.DEV
      ? `${window.location.protocol}//${window.location.hostname}:3001/api/auth/telegram`
      : 'https://heavystat.by/api/auth/telegram';
      
    script.setAttribute('data-auth-url', authUrl);
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-userpic', 'true');
    script.setAttribute('data-radius', '12'); 

    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
  }, []);

  return (

    <div className={styles.pageContainer}>
      <div className={styles.authCard}>
        
        <div className={styles.logoWrapper}>
       
          <img src="/favicon.jpg" alt="HeavyStat Logo" className={styles.logoImg} />
        </div>

        <h1 className={styles.title}>HeavyStat</h1>
        <p className={styles.subtitle}>Войдите через Telegram, чтобы получить доступ к тренировкам и статистике</p>
        
        <div className={styles.widgetContainer} id="telegram-login-container">
          
        </div>
        
      </div>

    </div>
  );
}