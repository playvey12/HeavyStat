import React, { useEffect } from 'react';
import styles from './AuthPageComp.module.css';

export default function AuthPageComp() {
   useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'HeavyStat_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', 'http://localhost:1488/api/auth/telegram');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-userpic', 'true');
    
    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>Добро пожаловать в HeavyStat!</h1>
      <p>Войдите через Telegram, чтобы продолжить</p>
      <div id="telegram-login-container"></div>
    </div>
  );
}