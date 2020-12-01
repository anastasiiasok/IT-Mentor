import { ADD_MENTORS, SEARCH_MENTORS } from './types';

export const addMentors = (mentors) => ({
  type: ADD_MENTORS,
  payload: mentors,
});
export const searchMentors = (mentors) => ({
  type: SEARCH_MENTORS,
  payload: mentors,
});
