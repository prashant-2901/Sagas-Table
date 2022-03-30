import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas/sagas";
// import thunk from "redux-thunk";
import { combineReducers } from "redux";
import axios from "axios";
import userReducerMain from "./reducer/reducer";
// import data from "./data.json";
//state =[]

const addReducer = combineReducers({
  contacts: userReducerMain,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(addReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
