import React from 'react'

function HOC(OriginalCompoent) {

  class WithMouseHover extends React.Component{
    state = {
      counter: 1
    }

    incrCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    render() {
      return (
        <OriginalCompoent counter={this.state.counter} incrCounter={this.incrCounter} {...this.props} />
      )
    }
  }
  return WithMouseHover;
}

export default HOC
