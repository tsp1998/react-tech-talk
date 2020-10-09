import { ADD_TODO, REMOVE_TODO } from './todo.types'

function CounterReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] }
    }
    case REMOVE_TODO: {
      const todos = [...state.todos];
      const modifiedArray = todos.filter(function (todo) {
        if (todo !== action.payload) {
          return todo;
        }
      })
      return { ...state, todos: modifiedArray }
    }

    default: return state;
  }
}

export default CounterReducer;