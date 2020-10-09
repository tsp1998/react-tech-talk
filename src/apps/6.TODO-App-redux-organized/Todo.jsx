import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addTodo, removeTodo } from './redux/todo/todo.actions'

export class Todo extends Component {

  state = {
    todo: ''
  }

  render() {
    console.log('this.props', this.props)
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({ todo: e.target.value })} />=
        <button onClick={() => this.props.addTodo(this.state.todo)}>Add Todo</button>
        {this.props.todos.map(todo => {
          return (
            <div onClick={() => this.props.removeTodo(todo)}>
              {todo}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Todo)
