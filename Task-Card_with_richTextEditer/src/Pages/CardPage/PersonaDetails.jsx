// import React from "react";
// import { useParams } from "react-router-dom";
// import sampleImage from '../../Images/login_background.png'

// const PersonaDetails = () => {
//     const { id } = useParams();

//     const personaData = [
//     { id: 1, image: sampleImage, title: "Sample", lastUpdated: "4 mins ago" },
//     { id: 2, image: sampleImage, title: "Sample2", lastUpdated: "3 mins ago" },
//     { id: 3, image: sampleImage, title: "Sample3", lastUpdated: "2 mins ago" }
//     ];

//     const persona = personaData[id] || { title: "Unknown Persona", image: "", description: "No data found." };

//     return (
//         <div className="persona-details">
//             <img src={persona.image} alt={persona.title} className="personaDetails-image" />
//             <h1>{persona.title}</h1>
//             <p>{persona.description}</p>
//         </div>
//     );
// };

// export default PersonaDetails;


import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./personaDetails.css";
import sampleImage from '../../Images/login_background.png'

const PersonaDetails = () => {
    const { id } = useParams();
    const personaDa = [
    { id: 1, image: sampleImage, title: "Sample", lastUpdated: "4 mins ago" },
    { id: 2, image: sampleImage, title: "Sample2", lastUpdated: "3 mins ago" },
    { id: 3, image: sampleImage, title: "Sample3", lastUpdated: "2 mins ago" }
    ];
    const persona = personaDa[id] || { title: "Unknown Persona", image: "", description: "No data found." };

    const [personaData, setPersonaData] = useState({
        name: persona.title,
        quote: "",
        description: "",
        motivations: "",
        painPoints: "",
        jobsNeeds: "",
        activities: "",
    });

    const handleChange = (e) => {
        setPersonaData({ ...personaData, [e.target.name]: e.target.value });
    };

    return (
        <div className="persona-details">
            {/* Background Image Section */}
            <div className="persona-banner" style={{ backgroundImage: `url(${persona.image})` }}>
                <div className="overlay">
                    <div className="persona-header">
                        <div>
                            <label className="persona-name-label">Persona Name*</label>
                            <h1 className="persona-name">{personaData.name}</h1>
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
                            placeholder="What drives and incentives the persona?"
                            value={personaData.motivations}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="persona-footer">
                <button className="delete-btn">DELETE</button>
                <div>
                    <button className="close-btn">CLOSE</button>
                    <button className="update-btn">UPDATE PERSONA</button>
                </div>
            </div>
        </div>
    );
};

export default PersonaDetails;
