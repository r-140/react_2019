import { takeEvery, call, put } from "redux-saga/effects";

import {
    LOAD_DOMAIN_REQUEST, LOAD_DOMAIN_SUCCESS, LOAD_DOMAIN_ERROR,
    LOAD_DOMAIN2_SUCCESS, LOAD_DOMAIN2_ERROR, LOAD_DOMAIN2_REQUEST,
     LOAD_LANG_SUCCESS, LOAD_LANG_ERROR, LOAD_LANG_REQUEST,
     LOAD_TYPES_SUCCESS, LOAD_TYPES_ERROR, LOAD_TYPES_REQUEST,
     LOAD_WF_SUCCESS, LOAD_WF_ERROR, LOAD_WF_REQUEST
    
} from "../actions/filterActions"

export default function* watcherFilterSaga() {
  yield takeEvery(LOAD_DOMAIN_REQUEST, workerSaga);

  yield takeEvery(LOAD_DOMAIN2_REQUEST, workerDomain2Saga);

  yield takeEvery(LOAD_LANG_REQUEST, workerLangSaga);

  yield takeEvery(LOAD_TYPES_REQUEST, workerTypesSaga);

  yield takeEvery(LOAD_WF_REQUEST, workerWFSaga);
  
}

function* workerSaga() {
  try {
    const payload = yield call(loadDomains);
    yield put({ type: LOAD_DOMAIN_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_DOMAIN_ERROR, payload: e });
  }
}

function* workerDomain2Saga() {
  try {
    const payload = yield call(loadDomains2);
    yield put({ type: LOAD_DOMAIN2_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_DOMAIN2_ERROR, payload: e });
  }
}

function* workerWFSaga() {
  try {
    const payload = yield call(loadWorkflows);
    yield put({ type: LOAD_WF_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_WF_ERROR, payload: e });
  }
}

function* workerLangSaga() {
  try {
    const payload = yield call(loadLanguages);
    yield put({ type: LOAD_LANG_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_LANG_ERROR, payload: e });
  }
}

function* workerTypesSaga() {
  try {
    const payload = yield call(loadAssetTypes);
    yield put({ type: LOAD_TYPES_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_TYPES_ERROR, payload: e });
  }
}


function loadDomains() {
  return fetch("http://localhost:63145/api/domains").then(response =>
    response.json()
  );
}

function loadDomains2() {
  return fetch("http://localhost:63145/api/domains2").then(response =>
    response.json()
  );
}

function loadLanguages() {
  return fetch("http://localhost:63145/api/languages").then(response =>
    response.json()
  );
}

function loadWorkflows() {
  return fetch("http://localhost:63145/api/workflows").then(response =>
    response.json()
  );
}

function loadAssetTypes() {
  return fetch("http://localhost:63145/api/assettypes").then(response =>
    response.json()
  );
}