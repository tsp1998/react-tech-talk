import { ADD_TODO, REMOVE_TODO } from './todo.types'

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo }
}

export const removeTodo = (todo) => {
  return { type: REMOVE_TODO, payload: todo }
}