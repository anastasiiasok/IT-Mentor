require('./dbConnect.js');
require('dotenv').config();

const Mentor = require('../models/Mentor');

const preloadedState = {
    name: 'Ivan',
    surname: 'Petrov',
    country: 'Russia',
    city: 'Moscow',
    email: 'iii@gmail.com',
    timezone: 'GMT+03',
    education: [
      {
        degree: 'Master',
        institution: 'MGU',
      },
    ],
    price: 15,
    lessons: 3,
    // skills: ['JS', 'React'],
    benefits: ['Help with JS', 'Help with React'],
    projects: [
      {
        title: 'Broccoli Blog',
        body: 'Online Blog',
      },
    ],
    resume: [
      {
        date: {
          start: new Date('2018-10-03'),
          end: Date.now(),
        },
        company: 'Google',
        position: 'Front-end developer',
      },
    ],
  };

const seed = ()=>{
    const init= new Mentor(preloadedState);
    init.save();
};

seed();