require('dotenv').config();
const User = require('../models/User.js');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET} = process.env;

module.exports = function(passport){
  passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3200/user/auth/google/callback"
},
async (accessToken, refreshToken, profile, done)=>{
  try {
    const user = await User.findOne({googleId: profile.id});
    if (!user) {
      const newUser = new User({googleId: profile.id, fullName: profile.displayName});
      await newUser.save();
      return done(null, newUser);
    } 
    return done(null, user);
  } catch(err) {
    return done(err);
  }
}));
  
  passport.use('google-authz', new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3200/user/connect/google/callback"
  },
  (accessToken, refreshToken, profile, done)=>{
    return done(null, profile.id)
  }));

  passport.use(new LocalStrategy({
    usernameField: 'contacts'
  },
    async function(username, password, done) {
      try {
        const user = await User.findOne({contacts: username});
        if (!user) {
          const newUser = new User({contacts: username, password: password});
          await newUser.save();
          return done(null, newUser);
        } 
        if (user.password !== password) {
          return done(null, false,{ message: 'Incorrect password.' });
        }
        return done(null, user);
      } catch(err) {
        return done(err);
      }
  }))



 passport.serializeUser((user,done)=>{
   if (user._id) {
     return done(null, user._id);
   }
   done(null, user);
 });

 passport.deserializeUser((id, done)=>{
  User.findById(id, function(err, user){
    if (!user) {
      return done(err, id);
    }
    done(err, user);
  });
 });
}
