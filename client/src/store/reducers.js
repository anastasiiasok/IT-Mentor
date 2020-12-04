import {
  ADD_MENTORS,
  SEARCH_MENTORS,
  SET_SCREEN,
  TOGGLE_LIKE,
  ACTIVATE_MENTOR,
  CHANGE_AUTH,
  SET_USER,
} from './types';

export const reducers = (state, action) => {
  switch (action.type) {
    case ADD_MENTORS:
      const addMentors = [...state.mentors, ...action.payload.mentors];
      return { ...state, mentors: addMentors };

    case SEARCH_MENTORS:
      return { ...state, mentors: action.payload.mentors };

    case SET_SCREEN:
      return { ...state, screen: action.payload };

    case SET_USER:
      return { ...state, user: action.payload };

    case ACTIVATE_MENTOR:
      return { ...state, activeMentor: action.payload };

    case CHANGE_AUTH:
      return { ...state, isAuth: action.payload };

    case TOGGLE_LIKE:
      let mentors = [...state.likedMentors];
      const likeMentors = state.mentors.map((mentor) => {
        if (mentor._id === action.payload) {
          mentor.liked = !mentor.liked;
          if (mentor.liked) {
            mentors = [...mentors, action.payload];
          } else {
            mentors = state.likedMentors.filter((id) => id !== action.payload);
          }
        }
        return mentor;
      });
      return { ...state, mentors: likeMentors, likedMentors: mentors };

    default:
      return state;
  }
};
