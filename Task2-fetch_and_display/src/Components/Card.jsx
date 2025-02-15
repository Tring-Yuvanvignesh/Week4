import React, { useState, useEffect } from 'react';
import './Card.css'; 
import mobile from '../image/vivo-y72-5G.jpg'

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.restful-api.dev/objects');
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
 
  function Ascending() {
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData)
    console.log(sortedData)
  }

  function Desending() {
    const sortedData = data.sort((b, a) => a.name.localeCompare(b.name))
    setData(sortedData)
    console.log(sortedData)
  }

  // console.log(data)
  

  return (
    <>
    <div>
      {/* <button onClick={Ascending}>Ascending </button>
      <button onClick={Desending}>Descending </button> */}
    </div>

      <div className="card-container">
      {data.map((curr) => (
        <div className="card">
          <img className='mobile' src={mobile} alt="" />
          <h2>{curr.name}</h2>
          { curr.data ? (
            <ul>
              {Object.entries(curr.data).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          ) : <p>No details</p>
          }
        </div>
      ))}
    </div>
    </>

  );
};

export default Card;
