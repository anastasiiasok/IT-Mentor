const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/'}),(req,res) => {
  console.log('you are signed in');
  res.json('signed in');
});

router.get('/connect/google', passport.authorize('google-authz', {scope: ['profile']}));

router.get('/connect/google/callback', passport.authorize('google-authz', { failureRedirect: '/'}), async (req,res) => {
  const user = req.user;
  user.googleId = req.account;
  await user.save();
  console.log('you have added google info');
  res.json('google acount connected');
});

router.post('/auth/local', passport.authenticate('local', { failureRedirect: '/'}), async (req, res)=>{
  if ((req.body.lastName !== "") && (req.body.firstName !== "")) {
    const user = req.user;
  user.lastName = req.body.lastName;
  user.firstName = req.body.firstName;
    try {
      await user.save();
    } catch(err) {
      if (err.keyValue.googleId !== null) {
        console.log('ERROR', err,'\n We are going to ignore it for now');
      };
    };
  }
  console.log('you are signed in locally');
  res.json('local signing: success');
})

router.post('/add/mentor', (req,res,next) => {
   if (req.isAuthenticated()) {
     return res.redirect('/user/auth/add/mentor');
   }
   next();
}, (req,res) => {
    req.session.user.push(req.body);
    res.json('mentor added to ip session');
});

router.post('auth/add/mentor', async (req,res)=>{
  await User.updateOne({_id: req.user._id}, {$addToSet : {mentors: req.body}})
});



router.get('/logout', (req,res) => {
  if (!req.isAuthenticated()) {
    console.log('you are not allowed to see that');
    return res.json('not allowed');
  }
  console.log('you are about to log out');
  req.logout();
    console.log('you are logged out');
    res.json('signed out');
 });

module.exports = router;