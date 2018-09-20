import { all } from 'redux-saga/effects';

import crewSaga from './crew';

export default function* Saga() {
  yield all([crewSaga()]);
}
