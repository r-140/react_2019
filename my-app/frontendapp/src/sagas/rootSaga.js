import { takeEvery, all} from "redux-saga/effects";


import watcherAssetSaga from "./api-saga";
import watcherFilterSaga from "./api-filter-saga";

// export default function* rootSaga() {
//     yield all([
//       ...fooSagas,
//       ...barSagas
//     ])
//   }


export default function* rootSaga () {
    yield all([
        watcherAssetSaga(), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        watcherFilterSaga()
    ])
}