const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor.js')

router.get('', async (req,res) => {
  const data = await Mentor.find({}).lean();
  res.json({data});
})

module.exports = router;