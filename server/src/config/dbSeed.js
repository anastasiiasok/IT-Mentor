require('./dbConnect.js');
require('dotenv').config();
const Mentor = require('../models/Mentor');
const faker = require('faker');


const seed = ()=>{
    const preloadedState = {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        country: faker.address.country(),
        city: faker.address.city(),
        email: faker.internet.email(),
        timezone: faker.address.timeZone(),
        education: [
          {
            degree: faker.lorem.word(),
            institution: faker.company.companyName(),
          },
        ],
        price: Math.round(Math.random()*2000)+1e3,
        lessons: Math.round(Math.random()*1e2),
        // skills: ['JS', 'React'],
        benefits: [faker.lorem.words(), faker.lorem.words()],
        projects: [
          {
            title: faker.lorem.word(),
            body: faker.lorem.words(),
          },
        ],
        resume: [
          {
            date: {
              start: faker.date.past(),
              end: faker.date.recent(),
            },
            company: faker.company.companyName(),
            position: faker.name.jobTitle(),
          },
        ],
      };
    const init= new Mentor(preloadedState);
    init.save();
};

let count = 20;
while(count > 0) {seed(); count -=1;}