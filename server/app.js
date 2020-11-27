require('dotenv').config();
require('./src/config/dbConnect.js');
const express = require('express');
const app = express();
const cors = require('cors');
const mentorRouter = require('./src/routes/mentor.js');
const PORT = process.env.PORT || 3000;

app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/mentor', mentorRouter);

app.listen(PORT, () =>
  console.log('express server is running at PORT: ', PORT));
