const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor.js')

router.get('', async (req,res) => {
  // console.log('>>>>> req.query is: ', req.query);
  // const mentors = await Mentor.find({skills: {$all: req.query.skills.split(',')}}).sort({price: 1}).limit(5).lean();
  let filter = {};
  if (req.query.skills !== undefined) filter={skills: {$all: req.query.skills.split(',')}};
  if (req.query.timezone !== undefined) filter={...filter,timezone: "GMT:+3"};
  let mentors;
  if (req.query.price !== undefined) {
    mentors = await Mentor.find(filter).sort({price: Number(req.query.price)}).limit(20).lean();
  } else {
    mentors = await Mentor.find(filter).limit(20).lean();
  }
  res.json({mentors});
})

module.exports = router;