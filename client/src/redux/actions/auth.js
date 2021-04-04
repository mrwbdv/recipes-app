import * as api from "../api";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const googleLogin = (result, token) => ({
  type: SIGNIN_SUCCESS,
  data: { result, token },
});

export const googleLogout = () => ({
  type: LOGOUT_SUCCESS,
});

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: SIGNUP_SUCCESS, data });
    history.push("/");
  } catch (error) {
    console.log(error.messgae);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: SIGNIN_SUCCESS, data });
    history.push("/");
  } catch (error) {
    console.log(error.messgae);
  }
};
