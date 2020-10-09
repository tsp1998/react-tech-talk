import React, { Component } from 'react'

import { connect } from 'react-redux'
import { incr } from './redux/counter/counter.actions'

export class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.counter}
        <br />
        <button onClick={this.props.incr}>Incr</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  incr: () => dispatch(incr())
})



export default connect(mapStateToProps, mapDispatchToProps)(Counter)
