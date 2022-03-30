import { RECEIVE_API_DATA, DELETE_SUCCESS, FINAL_UPDATE } from "../../store/actions/types";

const userReducerMain = (state = [], action) => {
  console.log(
    "in switch",
    "action - ",
    action,
    "action.payload",
    action.payload,
    "action.id",
    action.id
  );

  switch (action.type) {
    case RECEIVE_API_DATA:
      // console.log("in receive", action.payload);
      return action.payload;
    case DELETE_SUCCESS:
      const newState = state.filter((data) => data.id !== action.id);
      console.log(newState);
      // console.log(newState);

      return newState;

    case FINAL_UPDATE:
      console.log("in final update", action);
      return action.payload;
    default:
      return state;
  }
};
export default userReducerMain;
