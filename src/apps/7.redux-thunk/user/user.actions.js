import { SET_USER, SET_USER_LOGGED_IN } from './user.types'

export function setUser() {
  return { type: SET_USER, payload: user }
}