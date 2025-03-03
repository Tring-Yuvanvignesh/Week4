import React, { useState, useRef} from 'react'
import { createRef } from 'react'

const App = () => {

  const [ input, setInput ] = useState("")

  const Ref = createRef()

  const handleChange = (e) => {
    setInput(e.target?.value)
  }

  const display = () => {
    console.log(Ref.current.value)
  }

  console.log("Getting renderd")

  return (
    <div>
      <h1>Input</h1>
      <input type="text"
         onChange={(e) => handleChange(e)} 
         ref={Ref.current?.value}/>
      <p>My Name is {input}</p>
      <button onClick={display}>Click Me</button>
    </div>
  )
}

export default App