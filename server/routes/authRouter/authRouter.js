const express = require('express');

const fs = require('fs');
const path = require('path');

const { telegramAuth } = require('../../config/passport');
const router = express.Router();


router.get('/telegram', telegramAuth, (req, res) => {
  const clientUrl = process.env.CLIENT_URL || (process.env.NODE_ENV === 'production' ? 'https://heavystat.by' : 'http://localhost:5173');
  req.login(req.user, (err) => {
    if (err) {
      console.error('req.login error:', err);  
      return res.redirect(`${clientUrl}/?loginError=true`);
    }
    res.redirect(`${clientUrl}/profile`);
  });
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