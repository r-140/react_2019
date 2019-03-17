// import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from '../reducers/reducers';

import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    storeEnhancers(
    applyMiddleware(initialiseSagaMiddleware)
    )
);
initialiseSagaMiddleware.run(apiSaga);
export default store;



// export default createStore(reducers, applyMiddleware(thunk));