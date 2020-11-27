const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor.js')

router.get('', async (req,res) => {
  // console.log('>>>>> req.query is: ', req.query);
  const mentors = await Mentor.find({skills: {$all: req.query.skills.split(',')}}).sort({price: -1}).limit(5).lean();
  res.json({mentors});
})

module.exports = router;