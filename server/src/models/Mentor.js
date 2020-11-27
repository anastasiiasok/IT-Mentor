const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema( {
    name: {type: String, required: true},
    surname: {type: String, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    timezone: {type: String, required: true},
    summary: {type: String},
    education: [ {
        degree: {type: String, required: true},
        institution: {type: String, required: true},
    }],
    price: {type: Number},
    lessons: {type: Number},
    skills: [{type:String}],
    benefits: [{type: String}],
    projects: [{
        title: {type: String},
        body: {type: String, required: true}
    }],
    resume: [{
        date: {
            start: {type: String},
            end: {type: String},
        },
        company: {type: String},
        position: {type: String},
    }]
})

module.exports = mongoose.model('Mentor', mentorSchema);
