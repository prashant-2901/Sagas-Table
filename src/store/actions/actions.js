import { REQUEST_API_DATA, DELETE_SUCCESS, DELETE_INIT, CHECK_UPDATE, FINAL_UPDATE, RECEIVE_API_DATA, CHECK_ADD, FINAL_ADD } from './types'

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (payload) => ({
  type: RECEIVE_API_DATA,
  payload,
});

export const deleteSuccess = (id) => {
  return {
    type: DELETE_SUCCESS,
    id,
  };
};
export const deleteInit = (id) => {
  return {
    type: DELETE_INIT,
    id,
  };
};

export const checkUpdateContact = (payload) => {

  return {
    type: CHECK_UPDATE,
    payload,
    id: payload.id,
  };
};

export const finalUpdateContact = (payload) => {

  return {
    type: FINAL_UPDATE,
    payload,
  };
};

export const addContact = (payload) => {




  return {
    type: CHECK_ADD,
    payload: payload.payload,
    id: payload.payload.id,
  };


};
export const addContactSuccess = (payload) => {
  return {
    type: FINAL_ADD,
    payload,
  };
};
