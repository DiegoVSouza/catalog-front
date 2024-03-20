import { applyMiddleware, createStore } from "redux";
import {configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
export type AppState = ReturnType<typeof rootReducer>;