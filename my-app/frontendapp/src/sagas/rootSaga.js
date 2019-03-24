import { fork } from "redux-saga/effects";

import apiSaga from "./api-saga";
import apiFilterSaga from "./api-filter-saga";


export default function* rootSaga () {
    yield [
        fork(apiSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(apiFilterSaga),
    ];
}