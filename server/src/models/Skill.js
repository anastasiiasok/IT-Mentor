const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    tag: {type: String, required: true, unique: true},
    description: {type: String},
});

module.exports = mongoose.model('Skill',skillSchema);
