import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from '../api/crew';
import actions from '../actions/crew';
import { LOAD_CREW_REQUEST } from '../constants/actionTypes';

function* loadCrew() {
  try {
    const crew = yield call(api.loadCrew);
    yield put(actions.loadCrewSuccess(crew));
  } catch (error) {
    yield put(actions.loadCrewFailure(error));
  }
}

export default function* landingPageSaga() {
  yield takeLatest(LOAD_CREW_REQUEST, loadCrew);
}
