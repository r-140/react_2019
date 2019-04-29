import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';


import rootReducer from '../shared/reducers/reducers';

import createSagaMiddleware from "redux-saga";
import rootSaga from "../shared/sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
    routerMiddleware(createMemoryHistory()),
    sagaMiddleware,
];

export default (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...reduxMiddlewares)),
    );

    store.runSaga = sagaMiddleware.run(rootSaga);

    store.close = () => store.dispatch(END);

    return store;
};

// const initialiseSagaMiddleware = createSagaMiddleware();
// const store = createStore(
//     rootReducer,
//     applyMiddleware(initialiseSagaMiddleware)
// );
// initialiseSagaMiddleware.run(rootSaga);
// export default store;