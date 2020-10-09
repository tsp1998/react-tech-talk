import {
  SET_USERS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from './users.types'

export function setUsers() {
  return { type: SET_USER, payload: users }
}

export function decrementCounter() {
  return { type: SET_USER_LOGGED_IN }
}