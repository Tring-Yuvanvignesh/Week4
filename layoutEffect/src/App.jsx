
// //  Normal useEffect  ( ASynchronized )

// import React, {useState, useLayoutEffect, useEffect} from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)

//   useEffect(() => {                             // useEffect( fun, dependency )
//     console.log("count "+count)
//   },[ count ])


//   return (
//     <div>
//        {  console.log("Redered") }
//       <h1>{ count }</h1>
//       <button onClick={() => setCount(count+1)}>Add</button>
//     </div>
//   )
// }

// export default App





// using uselayoutEffect ( Synchronized )



// used inbetween a animation or layout event rendering


import React, { useState, useLayoutEffect, useEffect } from 'react'

const App = () => {

  // useLayoutEffect(() => {                             // useEffect( fun, dependency )
  //   console.log("i am layout effect")
  // }, [])

  // const [count, setCount] = useState(0)
  // useEffect(() => {                             // useEffect( fun, dependency )
  //   console.log("i am effect")
  // }, [])


  // console.log("i am out");


  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Add</button>
  //   </div>
  // )


  const [text, setText] = useState("Initial State");

  useEffect(() => {
    console.log("useEffect triggered");
    setText("Updated by useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect triggered");
    setText("Updated by useLayoutEffect");
  }, []);

  return <h1>{text}</h1>;

}

export default App

