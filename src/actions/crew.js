import { createAction } from 'redux-actions';
import {
  LOAD_CREW_REQUEST,
  LOAD_CREW_FAILURE,
  LOAD_CREW_SUCCESS,
  MOVE_CREW_FORWARD,
  MOVE_CREW_BACKWARD,
  FILTER_CREW,
} from '../constants/actionTypes';

const loadCrew = createAction(LOAD_CREW_REQUEST);
const loadCrewSuccess = createAction(LOAD_CREW_SUCCESS);
const loadCrewFailure = createAction(LOAD_CREW_FAILURE);

const moveCrewForward = createAction(MOVE_CREW_FORWARD);
const moveCrewBackward = createAction(MOVE_CREW_BACKWARD);

const filterCrew = createAction(FILTER_CREW);

export default {
  loadCrew,
  loadCrewSuccess,
  loadCrewFailure,

  moveCrewForward,
  moveCrewBackward,

  filterCrew,
};
