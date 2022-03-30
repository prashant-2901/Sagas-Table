import axios from "axios";
import {REQUEST_API_DATA, DELETE_SUCCESS, DELETE_INIT, CHECK_UPDATE, FINAL_UPDATE, RECEIVE_API_DATA} from './types'

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (payload) => ({
  type: RECEIVE_API_DATA,
  payload,
});

export const deleteSuccess = (id) => {
  console.log("deletesuccess", id);
  return {
    type: DELETE_SUCCESS,
    id,
  };
};
export const deleteInit = (id) => {
  console.log("deleteinit", id);
  return {
    type: DELETE_INIT,
    id,
  };
};

export const checkUpdateContact = (payload) => {
  console.log("in checkUpdateContact", payload);

  return {
    type: CHECK_UPDATE,
    payload,
    id: payload.id,
  };
};

export const finalUpdateContact = (id, payload) => {
  console.log("in finalUpdateContact", payload, id);

  return {
    type: FINAL_UPDATE,
    payload,
  };
};

export const addContact = (action) => {
  console.log("addContact action", action);
  return (dispatch) => {
    axios
      .post("http://localhost:8000/data", action.payload)
      .then((data) => {
        console.log("newData", data.data);
        dispatch(addContactSuccess(data.data));
      })
      .catch((error) => {
        // dispatch add contact fail
        console.log(error);
      });
  };
};
export const addContactSuccess = (payload) => {
  return {
    type: "add",
    payload,
  };
};
