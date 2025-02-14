import React, { useState } from "react";
import { addData } from "../../Data/data";
import './create.css'

const CreateComponent = ({ onRefresh }) => {
  const [formData, setFormData] = useState({
    name: "",
    Age: "",
    skills: "",
    Designition: "",
    Address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({ name: "", Age: "", skills: "", Designition: "", Address: "" });
    onRefresh();
  };

  return (
    <div>
      <h2>Create Entry</h2>
      <div className="createForm">
        <form onSubmit={handleSubmit} >
          <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
          <input type="number" name="Age" onChange={handleChange} placeholder="Age" required />
          <input type="text" name="skills" onChange={handleChange} placeholder="Skills" required />
          <input type="text" name="Designition" onChange={handleChange} placeholder="Designation" required />
          <input type="text" name="Address" onChange={handleChange} placeholder="Address" required />
          <button type="submit" className="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
