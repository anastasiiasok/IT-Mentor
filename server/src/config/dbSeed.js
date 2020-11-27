require('./dbConnect.js');
require('dotenv').config();
const Mentor = require('../models/Mentor');
const faker = require('faker');
const skills = ['Express','Postman', 'NodeJS','REST API','TypeScript','Saga','React','MongoDB','Sass','Ubuntu'];
const randomSkillSet = ()=>{
  const size = Math.round(Math.random()*3)+4;
  const index = [];
  const skill = [...skills];
  let set = [];
  for (let i = 0; i < size; i += 1) {
    set =[...set, ...skill.splice(Math.floor(Math.random()*(skills.length - i)),1)];
  }
  return set;
}

const seed = ()=>{
    const preloadedState = {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        country: faker.address.country(),
        city: faker.address.city(),
        email: faker.internet.email(),
        timezone: `GMT:+${Math.round(Math.random()*4)+1}`,
        summary: faker.lorem.words(),
        education: [
          {
            degree: faker.lorem.word(),
            institution: faker.company.companyName(),
          },
        ],
        price: Math.round(Math.random()*2000)+1e3,
        lessons: Math.round(Math.random()*1e2),
        skills: randomSkillSet(),
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
while(count > 0) {seed(); count -=1;};
