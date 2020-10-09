import React from 'react'

import HOC from './HOC'

function Heading(props) {
  return (
    <span onMouseEnter={props.incrCounter}>Span : {props.counter}</span>
  )
}

export default HOC(Heading)
