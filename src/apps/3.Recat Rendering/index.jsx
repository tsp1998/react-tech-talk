import React from 'react'

import Number from './Number'

import './style.css'

function index() {
  return (
    <div className="react-rendering">
      <div id="number"></div>
      Hello World
      <br /> <br />
      <Number />
      <br />
      <br />
      Hello
    </div>
  )
}

export default index
