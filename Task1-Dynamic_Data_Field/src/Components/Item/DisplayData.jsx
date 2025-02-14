import React from 'react'

const DisplayData = () => {

  const Data = JSON.parse(localStorage.getItem("data")) || []
  
  return (
    <div className='displayData'>
        <h2>User Data</h2>
        <pre>
            {JSON.stringify(Data, null, 2)}
        </pre>
    </div>
  )
}

export default DisplayData