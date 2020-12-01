import { ADD_MENTORS, SEARCH_MENTORS } from './types';

export const reducers = (state, action) => {
  switch (action.type) {
    case ADD_MENTORS:
      const addMentors = [...state.mentors, ...action.payload.mentors];
      return { ...state, mentors: addMentors };

    case SEARCH_MENTORS:
      return { ...state, mentors: action.payload.mentors };

    default:
      return state;
  }
};
