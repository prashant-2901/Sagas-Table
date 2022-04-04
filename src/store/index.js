import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas/sagas";
import { combineReducers } from "redux";
import userReducerMain from "./reducer/reducer";

const addReducer = combineReducers({
  contacts: userReducerMain,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(addReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
