import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case LOGOUT_SUCCESS:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
