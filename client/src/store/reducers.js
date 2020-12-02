import { ADD_MENTORS, SEARCH_MENTORS, SET_SCREEN, TOGGLE_LIKE } from './types';

export const reducers = (state, action) => {
  switch (action.type) {
    case ADD_MENTORS:
      const addMentors = [...state.mentors, ...action.payload.mentors];
      return { ...state, mentors: addMentors };

    case SEARCH_MENTORS:
      return { ...state, mentors: action.payload.mentors };

    case SET_SCREEN:
      return {...state, screen: action.payload};  

    case TOGGLE_LIKE:
      const likeMentors = state.mentors.map((mentor)=>{
        if (mentor._id === action.payload) mentor.liked = !mentor.liked;
        return mentor;
      });
      return {...state, mentors: likeMentors};


    default:
      return state;
  }
};
