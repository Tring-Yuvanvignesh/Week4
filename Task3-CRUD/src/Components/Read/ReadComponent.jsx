import React, { useState } from "react";
import { data, deleteData } from "../../Data/data";
import CreateComponent from "../Create/CreateComponent";
import UpdateComponent from "../Update/UpdateComponent";
import "./Read.css";

const ReadComponent = ({ onRefresh }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [index, setIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  return (
    <div className="read-container">
      <div className="read-headder">
        <h2>CRUD</h2>
        <div className="read-create"><button className="create-button" onClick={() => setShowCreateModal(true)}>Create</button></div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Age</th>
            <th>Skills</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { data.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No data</td>
              </tr>
            ) : data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.Designition}</td>
              <td>{item.Age}</td>
              <td>{item.skills}</td>
              <td>{item.Address}</td>
              <td className="action-buttons">
                <button 
                  className="update-button" 
                  onClick={() => { 
                    setIndex(i); 
                    setShowUpdateModal(true); 
                  }}
                >
                  Update
                </button>
                <button 
                  className="delete-button" 
                  onClick={() => { 
                    setDeleteIndex(i)
                    setShowDeleteModel(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCreateModal && (
        <div className="modalStyle">
          <div className="modalContentStyle">
            <button onClick={() => setShowCreateModal(false)} className="closeButtonStyle">X</button>
            <CreateComponent 
              onRefresh={() => { 
                onRefresh();
                setShowCreateModal(false); 
              }} 
            />
          </div>
        </div>
      )}

      {showUpdateModal && (
        <div className="modalStyle">
          <div className="modalContentStyle">
            <button onClick={() => setShowUpdateModal(false)} className="closeButtonStyle">X</button>
            <UpdateComponent index={index} onRefresh={onRefresh} show={setShowUpdateModal} />
          </div>
        </div>
      )}

      {showDeleteModel && (
        <div className="modalStyle">
          <div className="modalContentStyle">
              <button onClick={ () => {
                deleteData(deleteIndex)
                setShowDeleteModel(false)
              }}>Confirm</button>
              <button onClick={()=>{
                setShowDeleteModel(false)
              }}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReadComponent;
