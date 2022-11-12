import React, { useState } from 'react'
import Data from './Data'

const App = () => {
  
  const [data,setData]=useState(1)

  const setDat =(a) =>{

    if(data ==0){
      return setData(0);
    }
      setData(a+data)
  }

  return (
    <div>
      <h1>{data}</h1>
      
      <Data name={data} avinash={setDat} />
    </div>
    
  )
}

export default App




