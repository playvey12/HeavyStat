const passport = require("passport");
const User = require("../models/User");
const crypto = require('crypto');

async function verifyTelegramAuth(authData, botToken) {
  const checkString = Object.keys(authData)
    .filter(key => key !== 'hash')
    .sort()
    .map(key => `${key}=${authData[key]}`)
    .join('\n');
  
  const secret = crypto.createHash('sha256').update(botToken).digest();
  const hash = crypto.createHmac('sha256', secret).update(checkString).digest('hex');
  
  return hash === authData.hash;
}

async function telegramAuth(req, res, next) {
  const authData = req.query;
  
  if (!authData.hash) {
    return res.status(401).json({ error: 'No auth data' });
  }
  
  const isValid = await verifyTelegramAuth(authData, process.env.HEAVYSTAT_MAIN_BOT_TOKEN);
  
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid auth data' });
  }
  

  const now = Math.floor(Date.now() / 1000);
  if (now - parseInt(authData.auth_date) > 86400) {
    return res.status(401).json({ error: 'Auth data expired' });
  }
  

  let user = await User.findOne({ telegramId: String(authData.id) });
  
  if (!user) {
    user = new User({
      telegramId: String(authData.id),
      displayName: authData.first_name,
      telegramUsername: authData.username || null,
      avatarUrl: authData.photo_url || null
    });
    await user.save();
  } else {
    user.displayName = authData.first_name || user.displayName;
    user.telegramUsername = authData.username || user.telegramUsername;
    user.avatarUrl = authData.photo_url || user.avatarUrl;
    await user.save();
  }
  
  req.user = user;
  next();
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = { telegramAuth };