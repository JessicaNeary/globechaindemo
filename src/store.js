import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer.js";

import sagas from "./saga";
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
    compose(
        applyMiddleware(sagaMiddleware)
    ))
);

sagaMiddleware.run(sagas);

export default store;
