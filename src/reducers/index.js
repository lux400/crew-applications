import { combineReducers } from 'redux';
import { crewReducer } from '../reducers/crew';

export const rootReducer = combineReducers({
  crew: crewReducer,
});
