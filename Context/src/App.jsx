import React from 'react'
import Parent from './Components/parent'
import { createContext } from 'react'


export const context = createContext()

const App = () => {

  return (
    <context.Provider value={{
      name: 'Demo'
    }}>
      {console.log("Hello")}
      <Parent />
    </context.Provider>
  )
}

export default App