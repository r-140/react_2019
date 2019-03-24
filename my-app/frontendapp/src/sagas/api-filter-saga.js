import { takeEvery, call, put } from "redux-saga/effects";

import {
    LOAD_DOMAIN_REQUEST, LOAD_DOMAIN_SUCCESS, LOAD_DOMAIN_ERROR
    
} from "../actions/filterActions"

export default function* watcherFilterSaga() {
  yield takeEvery(LOAD_DOMAIN_REQUEST, workerSaga);
  
}
function* workerSaga() {
  try {
    const payload = yield call(loadDomains);
    yield put({ type: LOAD_DOMAIN_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_DOMAIN_ERROR, payload: e });
  }
}
function loadDomains() {
  return fetch("http://localhost:63145/api/domains").then(response =>
    response.json()
  );
}