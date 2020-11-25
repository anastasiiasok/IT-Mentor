import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers, initialState } from './reducers';

const composeEnhancers = composeWithDevTools();

export const store = createStore(reducers, initialState, composeEnhancers);
