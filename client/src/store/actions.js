import {ADD_MENTORS, ADD_VALUES} from "./types";

export const addMentors = (mentors) => ({type: ADD_MENTORS, payload: mentors });
export const addValues = (values)=>({type: ADD_VALUES, payload: values});