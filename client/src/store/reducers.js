import { ADD_MENTORS } from "./types"; //// [{}, {},{}] ...=> [{},{},{}, {}, {}]

export const reducers = (state, action) => {
  switch (action.type) {
    case ADD_MENTORS:
      return [...state,... action.payload];

    default:
      return state;
  }
};
