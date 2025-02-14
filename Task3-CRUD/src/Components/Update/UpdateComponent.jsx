import React, { useState } from "react";
import { data, updateData } from "../../Data/data";
import '../Create/create.css'

const UpdateComponent = ({ index, onRefresh, show }) => {
  const [formData, setFormData] = useState(data[index]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateData(index, formData); 
    onRefresh();
    show(false);
  };

  return (
    <div>
      <h2>Update Data</h2>
          <div className="Form">
            <div className="Form-data"><label htmlFor="">Name: </label><input type="text" name="name" value={formData.name} onChange={handleChange} /></div>
            <div className="Form-data"><label htmlFor="">Designition: </label><input type="text" name="Designition" value={formData.Designition} onChange={handleChange} /></div>
            <div className="Form-data"><label htmlFor="">Age: </label><input type="number" name="Age" value={formData.Age} onChange={handleChange} /></div>
            <div className="Form-data"><label htmlFor="">skills: </label><input type="text" name="skills" value={formData.skills} onChange={handleChange} /></div>
            <div className="Form-data"><label htmlFor="">Address: </label><input type="text" name="Address" value={formData.Address} onChange={handleChange} /></div>
            <button onClick={handleUpdate} className="submit">Save</button>
          </div>
    </div>
  );
};

export default UpdateComponent;
