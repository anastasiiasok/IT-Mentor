import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

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

const composeEnhancers = composeWithDevTools();

export const store = createStore(reducers, preloadedState, composeEnhancers);
