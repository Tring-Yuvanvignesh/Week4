import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import List from './List'

const App = () => {

  const [number, setNumber ] = useState(0)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(()=> {                // returns the function  =>  ()=> { return [ number + 1, number + 2,number + 3 ] }
    return [ number + 1, number + 2,number + 3 ]
  }, [number])

  // const getItems = useMemo(()=> {                 
  //   return [ number + 1, number + 2,number + 3 ]  // returns value [ number + 1, number + 2,number + 3 ]
  // }, [number])

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div style={theme} >
      <input type="number"
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr) }>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  )
}

export default App