import { 
  LOGIN_FAILURE, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  REGISTER_FAILURE, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS 
} from "../../constants/actionTypes";

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = { id: 1, username: userData.username };
    dispatch({ type: REGISTER_SUCCESS, payload: user });
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const user = { id: 1, username: userData.username };
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('user');
}
