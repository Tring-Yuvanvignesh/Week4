import React from "react";
import { useNavigate } from "react-router-dom";
import './personaCard.css';

const PersonaCard = ({ id, image, title, lastUpdated }) => {
    const navigate = useNavigate();

    return (
        <div className="persona-card" onClick={() => navigate(`/persona/${id-1}`)}>
            <img src={image} alt={title} className="persona-image" />
            <h3 className="persona-title">{title}</h3>
            <p className="persona-timestamp">Last updated: {lastUpdated}</p>
        </div>
    );
};

const AddPersonaCard = ({ onClick }) => {
    return (
        <div className="add-persona-card" onClick={onClick}>
            <div className="add-icon">+</div>
            <p>Add a Persona</p>
        </div>
    );
};

const PersonaGrid = ({ personas, onAddPersona }) => {
    return (
        <div className="Persona-main">
            <div className="Persona-container">
                <div className="AddPersona">
                    <button onClick={onAddPersona}><span>+</span> Add Persona</button>
                </div>
                <div className="persona-grid">
                    {personas.map((persona) => (
                        <PersonaCard
                            key={persona.id}
                            id={persona.id}
                            image={persona.image}
                            title={persona.title}
                            lastUpdated={persona.lastUpdated}
                        />
                    ))}
                    <AddPersonaCard onClick={onAddPersona} />
                </div>
            </div>
        </div>
    );
};

export default PersonaGrid;



// import React from "react";
// import './personaCard.css'

// const PersonaCard = ({ image, title, lastUpdated, onClick }) => {
//     return (
//         <div className="persona-card">
//             <img src={image} alt={title} className="persona-image" />
//             <h3 className="persona-title">{title}</h3>
//             <p className="persona-timestamp">Last updated: {lastUpdated}</p>
//         </div>
//     );
// };

// const AddPersonaCard = ({ onClick }) => {
//     return (
//         <div className="add-persona-card" onClick={onClick}>
//             <div className="add-icon">+</div>
//             <p>Add a Persona</p>
//         </div>
//     );
// };

// const PersonaGrid = ({ personas, onAddPersona }) => {
//     return (
//         <div className="Persona-main">
//             <div className="Persona-container">
//                 <div className="AddPersona"><button><span>+</span>Add Persona</button></div>
//                 <div className="persona-grid">
//                     {personas.map((persona, index) => (
//                         <PersonaCard
//                             key={index}
//                             image={persona.image}
//                             title={persona.title}
//                             lastUpdated={persona.lastUpdated}
//                         />
//                     ))}
//                     <AddPersonaCard onClick={onAddPersona} />
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default PersonaGrid;