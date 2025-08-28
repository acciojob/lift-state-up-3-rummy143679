import React from 'react'

function Child2({setSelectedOption}) {
  return (
    <div className='child2'>
        <h2>Child component 2</h2>
        <button onClick={() => setSelectedOption("Option 2")}>Select Option 2</button>
    </div>
  )
}

export default Child2