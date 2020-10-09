import React from 'react'

import HOC from './HOC'

function Heading(props) {
  return (
    <h1 onMouseEnter={props.incrCounter}>Heading : {props.counter}</h1>
  )
}

export default HOC(Heading)
