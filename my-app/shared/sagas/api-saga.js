import { takeEvery, call, put } from "redux-saga/effects";

// https://medium.freecodecamp.org/redux-saga-common-patterns-48437892e11c

import {
    LOAD_ASSETS_REQUEST, LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR, LOAD_BY_FILTER_REQUEST, LOAD_BY_FILTER_SUCCESS, LOAD_BY_FILTER_ERROR
    
} from "../actions/actions"

export  function* watcherAssetSaga() {
  yield takeEvery(LOAD_ASSETS_REQUEST, workerSaga);
  yield takeEvery(LOAD_BY_FILTER_REQUEST, workerFilterSaga);
}
function* workerSaga() {
  try {
    
    const payload = yield call(loadAssets);
    yield put({ type: LOAD_ASSETS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_ASSETS_ERROR, error: e });
  }
}


function* workerFilterSaga(action) {
  try {
    
    const {filter} = action;

// in case of many arguments us this construction
// const payload = yield call(loadByFilter, [{filter}]);

    const payload = yield call(loadByFilter, {filter});

    
    yield put({ type: LOAD_BY_FILTER_SUCCESS, payload });
  } catch (e) {
    
    yield put({ type: LOAD_BY_FILTER_ERROR, error: e });
  }
}
function loadAssets() {

  return fetch("http://localhost:63145/api/assets").then(response =>
      response.json()
  );
}

// todo add additional filters
function loadByFilter(filter) {

  return fetch(`http://localhost:63145/api/assets/${filter.filter}`).then(response =>
    response.json()
  );
}