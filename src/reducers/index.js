import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { crewReducer } from '../reducers/crew';

export const rootReducer = combineReducers({
  crew: crewReducer,
  router: routerReducer,
});
