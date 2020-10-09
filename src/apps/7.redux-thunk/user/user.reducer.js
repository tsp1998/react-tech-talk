import {
  SET_USER, SET_USER_LOGGED_IN,
  FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAIL
} from './user.types'

const initialState = {
  isLoggedIn: false,
  loading: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case SET_USER_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    default: return state;
  }
}

export default userReducer;