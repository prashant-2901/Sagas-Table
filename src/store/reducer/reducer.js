import { RECEIVE_API_DATA, DELETE_SUCCESS, FINAL_UPDATE, FINAL_ADD } from "../../store/actions/types";

const userReducerMain = (state = [], action) => {


  switch (action.type) {
    case RECEIVE_API_DATA:
      return action.payload;
    case DELETE_SUCCESS:
      const newState = state.filter((data) => data.id !== action.id);

      return newState;

    case FINAL_UPDATE:
      return action.payload;
    case FINAL_ADD:
      return action.payload;
    default:
      return state;
  }
};
export default userReducerMain;
