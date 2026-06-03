const express = require('express');
<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');
>>>>>>> 63e5bb9 (tg autorization)
const { telegramAuth } = require('../../config/passport');
const router = express.Router();


router.get('/telegram', telegramAuth, (req, res) => {
<<<<<<< HEAD
  res.redirect('http://localhost:5173/profile');
=======
  const clientUrl = process.env.CLIENT_URL || (process.env.NODE_ENV === 'production' ? 'https://heavystat.by' : 'http://localhost:5173');
  
  req.login(req.user, (err) => {
    if (err) {
      console.error('req.login error:', err);  
      return res.redirect(`${clientUrl}/?loginError=true`);
    }
    res.redirect(`${clientUrl}/profile`);
  });
>>>>>>> 63e5bb9 (tg autorization)
});


router.get('/me', (req, res) => {
  if (req.user) {
    res.json({ success: true, user: req.user });
  } else {
    res.json({ success: false, user: null });
  }
});


router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ success: true });
  });
});

module.exports = router;