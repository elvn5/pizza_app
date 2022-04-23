import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./saga/rootSaga";


const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

