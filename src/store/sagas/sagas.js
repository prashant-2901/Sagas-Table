import {
  call,
  put,
  takeEvery,
  takeEntry,
  takeLatest,
} from "redux-saga/effects";
import {
  receiveApiData,
  deleteSuccess,
  finalUpdateContact,
} from "../../store/actions/actions";
import {
  REQUEST_API_DATA,
  DELETE_INIT,
  CHECK_UPDATE,
} from "../../store/actions/types";
import { fetchData, deleteContactsAPI, updateContactsAPI } from "../../api/api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    // console.log("getApidata");

    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* deleteContact({ id }) {
  try {
    const newData = yield call(deleteContactsAPI, id);
    // console("in deleteContact", newData, "id", id);
    yield put(deleteSuccess(id));
  } catch (e) {
    console.log(e);
  }
}
function* updateContact(payload) {
  try {
    console.log("in updateContact", payload);
    const newData = yield call(updateContactsAPI, payload);
    console.log("in updateContact",newData);
    yield put(finalUpdateContact(newData));
    console.log("in updateContact", newData);

  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  console.log("mySaga");
  yield takeEvery(REQUEST_API_DATA, getApiData);
  yield takeEvery(DELETE_INIT, deleteContact);
  yield takeEvery(CHECK_UPDATE, updateContact);
}
