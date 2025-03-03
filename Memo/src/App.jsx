import React, { useState, useEffect, useMemo } from 'react'

const App = () => {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {   
    return slowFunction(number)         // return a variable
  }, [number])

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

export default App

function slowFunction ( num ) {
  console.log("Running slow");
  for(let i=0 ; i< 100000000; i++) {}
  return num*2
}