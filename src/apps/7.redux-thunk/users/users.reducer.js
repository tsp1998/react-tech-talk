import { SET_USER, SET_USER_LOGGED_IN } from './user.types'

const initialState = {
  isLoggedIn: false
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