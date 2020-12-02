require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const mentorRouter = require('./src/routes/mentor.js');
const userRouter = require('./src/routes/user.js');
const PORT = process.env.PORT || 3000;

// DB connect
require('./src/config/dbConnect')(mongoose);

// PASSPORT config
require('./src/config/passport')(passport);

app.set('trust proxy', 1);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// CORS!
app.use(cors());

// Session
app.use(session({
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  saveUninitialized: false,
  secret: 'keyboard cat',
  resave: false,
  cookie: {
    sameSite: 'strict',
    maxAge: 1000*60*2,
  }
}));

// PASSPORT Middleware, should be after session!!!
app.use(passport.initialize());
app.use(passport.session());

app.use('/mentor', mentorRouter);
app.use('/user', userRouter);

app.get('/', (req,res)=>{
  console.log("something did't go according to plan");
  res.json('auth failed');
});

app.listen(PORT, () =>
  console.log('express server is running at PORT: ', PORT));
