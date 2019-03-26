
import { createStore, applyMiddleware, compose } from "redux";


import rootReducer from '../reducers/reducers';

import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga"


const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    applyMiddleware(initialiseSagaMiddleware)
    // storeEnhancers(
    // applyMiddleware(initialiseSagaMiddleware)
    // )
);
initialiseSagaMiddleware.run(rootSaga);
export default store;

