import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  receiveApiData,
  deleteSuccess,
  finalUpdateContact,
  addContactSuccess,
} from "../../store/actions/actions";
import {
  REQUEST_API_DATA,
  DELETE_INIT,
  CHECK_UPDATE,
  CHECK_ADD,
} from "../../store/actions/types";
import { fetchData, deleteContactsAPI, updateContactsAPI, addContactsAPI } from "../../api/api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData);

    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* deleteContact({ id }) {
  try {
    const newData = yield call(deleteContactsAPI, id);
    yield put(deleteSuccess(id));
  } catch (e) {
    console.log(e);
  }
}
function* updateContact(payload) {
  try {
    const newData = yield call(updateContactsAPI, payload);
    yield put(finalUpdateContact(newData));

  } catch (e) {
    console.log(e);
  }
}

function* addContact(payload) {
  try {
    const newData = yield call(addContactsAPI, payload);
    yield put(addContactSuccess(newData));

  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
  yield takeEvery(DELETE_INIT, deleteContact);
  yield takeEvery(CHECK_UPDATE, updateContact);
  yield takeEvery(CHECK_ADD, addContact);
}
