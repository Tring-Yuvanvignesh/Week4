import React, { Children, useState, useEffect } from 'react'
import { createContext} from 'react'
import Card from '../Components/Card.jsx'

export const nameContext= createContext()

const Test = () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.restful-api.dev/objects');
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const result = await response.json();
  //       setData(result); 
  //     } catch (error) {
  //       console.log(error)
  //     } 
  //   };

  //   fetchData();
  // }, []);

  return (
    <nameContext.Provider value={data}>
          <Card />
    </nameContext.Provider>
  )
}

export default Test