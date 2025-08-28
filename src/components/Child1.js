import React from 'react'

function Child1({setSelectedOption}) {
  return (
    <div className='child1'>
        <h2>Child component 1</h2>
        <button onClick={() => setSelectedOption("Option 1")}>Select Option 1</button>
    </div>
  )
}

export default Child1