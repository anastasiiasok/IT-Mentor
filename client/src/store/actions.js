import {
  ADD_MENTORS,
  SEARCH_MENTORS,
  SET_SCREEN,
  TOGGLE_LIKE,
  ACTIVATE_MENTOR,
} from './types';

export const addMentors = (mentors) => ({
  type: ADD_MENTORS,
  payload: mentors,
});
export const searchMentors = (mentors) => ({
  type: SEARCH_MENTORS,
  payload: mentors,
});
export const activeMentor = (mentor) => ({
  type: ACTIVATE_MENTOR,
  payload: mentor,
});
export const setScreen = (size) => ({ type: SET_SCREEN, payload: size });

export const toggleLike = (id) => {
  console.log('calling toggleLike >>>>');
  return { type: TOGGLE_LIKE, payload: id };
};
