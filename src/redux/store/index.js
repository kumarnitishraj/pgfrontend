import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import { logger } from "redux-logger";
import IndexSagas from "./sagas";


import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

  
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);  
sagaMiddleware.run(IndexSagas);

export default store;

