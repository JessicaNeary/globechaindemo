import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(sagas);

export default store;
