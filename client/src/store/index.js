import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';
import { SCREEN_SIZE } from './types';

const preloadedState = {
  mentors: [
    // {
    //   name: 'Ivan',
    //   surname: 'Petrov',
    //   country: 'Russia',
    //   city: 'Moscow',
    //   email: 'iii@gmail.com',
    //   timezone: 'GMT+03',
    //   education: [
    //     {
    //       degree: 'Master',
    //       institution: 'MGU',
    //     },
    //   ],
    //   price: 15,
    //   lessons: 3,
    //   skills: ['JS', 'React'],
    //   benefits: ['Help with JS', 'Help with React'],
    //   projects: [
    //     {
    //       title: 'Broccoli Blog',
    //       body: 'Online Blog',
    //     },
    //   ],
    //   resume: [
    //     {
    //       date: {
    //         start: '2018-10-03',
    //         end: 'now',
    //       },
    //       company: 'Google',
    //       position: 'Front-end developer',
    //     },
    //   ],
    // },
  ],
  screen: SCREEN_SIZE,
  likedMentors: [],
  activeMentor: {},
};

const composeEnhancers = composeWithDevTools();

export const store = createStore(reducers, preloadedState, composeEnhancers);
