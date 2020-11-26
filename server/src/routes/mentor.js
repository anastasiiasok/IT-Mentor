const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor.js')

router.get('', async (req,res) => {
  const mentors = await Mentor.find({}).lean();
  res.json({mentors});
})

module.exports = router;