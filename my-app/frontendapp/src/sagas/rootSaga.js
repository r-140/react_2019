import { takeEvery, all} from "redux-saga/effects";


import watcherAssetSaga from "./api-saga";
import watcherFilterSaga from "./api-filter-saga";


export default function* rootSaga () {
    yield all([
        watcherAssetSaga(),
        watcherFilterSaga()
    ])
}