import { ADD_MENTORS, ADD_VALUES} from "./types"; 

export const reducers = (state, action) => {
  switch (action.type) {

    case ADD_MENTORS:
      const addMentors = [...state.mentors,...action.payload.mentors];
      return {...state, mentors: addMentors};

    case ADD_VALUES:
      const addValues = [...state.selectedValues,...action.payload.values];
      return {...state, selectedValues: addValues};  

    default:
      return state;
  }
};
