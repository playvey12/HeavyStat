const express = require('express');
const { telegramAuth } = require('../../config/passport');
const router = express.Router();


router.get('/telegram', telegramAuth, (req, res) => {
  res.redirect('http://localhost:5173/profile');
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