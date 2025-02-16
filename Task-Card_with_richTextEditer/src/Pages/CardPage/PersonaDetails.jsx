import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonaForCurrentUser, deletePersonaForCurrentUser } from "../../Slicer/authSlice";
import "./personaDetails.css";
import sampleImage from '../../Images/login_background.png';

const PersonaDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);

    const existingPersona = currentUser.personas.find(p => p.id === parseInt(id));

    const [personaData, setPersonaData] = useState(
        existingPersona || {
            id: parseInt(id),
            title: "",
            quote: "",
            description: "",
            motivations: "",
            painPoints: "",
            jobsNeeds: "",
            activities: "",
            image: sampleImage,
            lastUpdated: "",
        }
    );

    const handleChange = (e) => {
        setPersonaData({ ...personaData, [e.target.name]: e.target.value })
    };

    const handleUpdate = () => {
        const updatedPersona = {
            ...personaData,
            lastUpdated: new Date().toLocaleString(),
        }

        dispatch(updatePersonaForCurrentUser(updatedPersona))
        alert("Persona updated successfully!")
        navigate("/landingPage")
    };
 
    const handleDelete = () => {
        dispatch(deletePersonaForCurrentUser(personaData.id))
        navigate("/landingPage")
    }

    return (
        <div className="persona-details">
            <div className="persona-banner" style={{ backgroundImage: `url(${personaData.image})` }}>
                <div className="overlay">
                    <div className="persona-header">
                        <div>
                            <label className="persona-name-label">Persona Name*</label>
                            <input
                                type="text"
                                name="title"
                                value={personaData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="edit-image-btn">✏️ Edit Image</button>
                    </div>
                </div>
            </div>

            <div className="persona-content">
                <div className="persona-grid">
                    <div className="persona-field">
                        <label>Notable Quote</label>
                        <input
                            type="text"
                            name="quote"
                            placeholder="Enter a quote that identifies the persona"
                            value={personaData.quote}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="persona-field">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter a general description/bio about the persona"
                            value={personaData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="persona-field">
                        <label>Attitudes / Motivations</label>
                        <input
                            type="text"
                            name="motivations"
                            placeholder="What drives the persona?"
                            value={personaData.motivations}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="persona-footer">
                <button className="delete-btn" onClick={handleDelete}>DELETE</button>
                <div>
                    <Link to={'/landingPage'}><button className="close-btn">CLOSE</button></Link>
                    <button className="update-btn" onClick={handleUpdate}>UPDATE PERSONA</button>
                </div>
            </div>
        </div>
    );
};

export default PersonaDetails;
