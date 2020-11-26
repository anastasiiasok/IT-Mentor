import {ADD_MENTORS} from "./types";
const addMentors = (mentors) => ({type: ADD_MENTORS, payload: mentors});

export default addMentors;