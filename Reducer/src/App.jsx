// normal way

// import React, { useState, useReducer } from 'react'

// const App = () => {

//   const [count,setCount ] = useState(0)

//   const incre = () => {
//     setCount(count+1)
//   }
//   const decre = () => {
//     setCount(count-1)
//   }

//   return (
//     <div style={{
//       display: "flex",
//       gap: "5px"
//     }}>
//       <button onClick={decre}>-</button>
//       <h2>{ count }</h2>
//       <button onClick={incre}>+</button>
//     </div>
//   )
// }

// export default App



// using useReducer

import React, { useState, useReducer } from 'react'

const App = () => {

  const reducerFun = ( state, action) => {   // state pointing the perticuler state that in the declaration
                                             // action is like payload from dispatch
    switch(action.type) {
      case "Increment":
        return { count: state.count + 1 }
      case "Decrement":
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  console.log(b);
  

  const [ state, dispatch] = useReducer(reducerFun, { count: 1 }) // const [state, dispatch] = useReducer(func, initial State)


  const [count,setCount ] = useState(0)

  const incre = () => {
    dispatch({
      type: "Increment"
    })      // dispatch => reducerFunc => state
  }
  const decre = () => {
    dispatch({
      type: "Decrement"
    })      // dispatch => reducerFunc => state
  }

  return (
    <div style={{
      display: "flex",
      gap: "5px"
    }}>
      <button onClick={decre}>-</button>
      <h2>{ state.count }</h2>
      <button onClick={incre}>+</button>
    </div>
  )
}

export default App


