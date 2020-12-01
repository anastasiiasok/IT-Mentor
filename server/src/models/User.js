const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { 
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  contacts: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  mentors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
