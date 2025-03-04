import React from 'react'
import './displayData.css'
import { data } from 'react-router-dom'

const DisplayData = () => {

  const Data = JSON.parse(localStorage.getItem("data")) || []

  return (
    <>
      <h2>User Data</h2>
      <div className='Display'>
        <div className='displayData'>

          {/* {JSON.stringify(Data, null, 2)} */}

          <table className='data-table'>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile</th>
            </tr>
            {
              Data.map((curr, index) => (
                <tr key={index}>
                  <td>{curr.name}</td>
                  <td>{curr.age}</td>
                  <td>{curr.mobile}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </div>
    </>

  )
}

export default DisplayData