import React from 'react'

const Data = (props) => {

    
  return (
    <div>
      <button onClick={() =>props.avinash(-1)}>decrement</button>
      <button onClick={() =>props.avinash(+1)}>Increment</button>
        
        {props.name}</div>
  )
}

export default Data