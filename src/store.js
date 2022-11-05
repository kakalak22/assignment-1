import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer/reducers";
import rootWatcher from "./saga/watchers";

const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

saga.run(rootWatcher);

export default store;