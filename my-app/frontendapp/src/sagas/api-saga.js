import { takeEvery, call, put } from "redux-saga/effects";

import {
    LOAD_ASSETS_REQUEST, LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR
    
} from "../actions/actions"

export default function* watcherSaga() {
  yield takeEvery(LOAD_ASSETS_REQUEST, workerSaga);
}
function* workerSaga() {
  try {
    const payload = yield call(loadAssets);
    yield put({ type: LOAD_ASSETS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_ASSETS_ERROR, payload: e });
  }
}
function loadAssets() {
  return fetch("http://localhost:63145/api/assets").then(response =>
    response.json()
  );
}