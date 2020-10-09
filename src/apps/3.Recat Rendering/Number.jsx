import React, { useState } from 'react'

function Box() {
  const [number, setNumber] = useState(1);
  return (
    <div className='number'>
      {number}
      <br/>
      <br/>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  )
}

export default Box
