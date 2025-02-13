import React, { useState } from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import DisplayData from "./DisplayData";

const Item = () => {
  const [data, setData] = useState([{ name: "", age: "", mobile: "" }]);
  const navigate = useNavigate();

  function addItem() {
    // if(data[index].name.trim() == "" || data[index].age.trim() == "" || data[index].mobile.trim() == ""){
    //     alert("please fill the all data")
    // }
    // else{
    //     setData([...data, { name: "", age: "", mobile: "" }]);
    // }
    let flag = true

    data.map((item,index) => {
          if(item.name.trim() == "" || item.age.trim() == "" || item.mobile.trim() == ""){
              alert("Kindly complete all fields in Row No " +  (index+1))
              flag = false
          }
    })

    if(flag === true){
        setData([...data, { name: "", age: "", mobile: "" }]);
    }
    return flag
  }

  function handleChange(index, field, value) {
    setData((prev) => {
        return prev.map((item, inside_index) => {
            return inside_index === index ? { ...item, [field]: value } : item
        })
    })
  }

  function removeItem(index) {
        setData((data) => data.filter(( dummy , i) => i !== index))
  }

  function sendData(){
    let flag = addItem()
    if(flag){
      localStorage.setItem("data",JSON.stringify(data));
      navigate('./Data')
    }

  }

// console.log( data.map((curr,index) => (
//     {
//         name: curr.name,
//         age: curr.age,
//         mobile: curr.mobile
//     }
// )))

  return (
    <div className="main-container">
       <h2>User Details</h2>
      {data.map((curr, index) => (
        <div className="container" key={index}>
            <div><input type="text" value={curr.name} placeholder="Name" onChange={(e) => handleChange(index,"name",e.target.value)}/></div>
            <div><input type="text" value={curr.age} placeholder="Age" onChange={(e) => handleChange(index,"age",e.target.value)}/></div>
            <div><input type="text" value={curr.mobile} placeholder="Mobile" onChange={(e) => handleChange(index,"mobile",e.target.value)}/></div>
            <button className="addButton" onClick={() => addItem(index)}>+</button>
            { (data.length > 1) ? <button className="removeButton" onClick={() => removeItem(index)}>-</button> : <button className="removeButton" disabled>-</button> } 
        </div>
      ))}
      <div className="submitContainer"><button  className="submit" onClick={() => sendData()}>Submit</button></div>
    </div>
  );
};

export default Item;


