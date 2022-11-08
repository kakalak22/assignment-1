import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer/reducers";
import rootWatcher from "./saga/watchers";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(persistedReducer, applyMiddleware(...middleWares));

saga.run(rootWatcher);

export default store;
export const persistor = persistStore(store);