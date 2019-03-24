import { takeEvery, call, put } from "redux-saga/effects";

// https://medium.freecodecamp.org/redux-saga-common-patterns-48437892e11c

import {
    LOAD_ASSETS_REQUEST, LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR, LOAD_BY_FILTER_REQUEST
    
} from "../actions/actions"

export default function* watcherAssetSaga() {
  yield takeEvery(LOAD_ASSETS_REQUEST, workerSaga);
  // yield takeEvery(LOAD_BY_FILTER_REQUEST, workerSaga);
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
  console.log("loadAssets saga")
  return fetch("http://localhost:63145/api/assets").then(response =>
    response.json()
  );
}

function loadByFilter(filter) {
  return fetch("http://localhost:63145/api/assets").then(response =>
    response.json()
  );
}