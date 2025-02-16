import React from 'react'
import PersonaGrid from '../../Components/PersonaCard/PersonaCard';
import sampleImage from '../../Images/login_background.png'
import Landingnav from '../../Components/Landinnav/Landinnav';
import './landingPage.css'

const LandingPage = () => {

  const personas = [
    { id: 1, image: sampleImage, title: "Sample", lastUpdated: "4 mins ago" },
    { id: 2, image: sampleImage, title: "Sample2", lastUpdated: "3 mins ago" },
    { id: 3, image: sampleImage, title: "Sample3", lastUpdated: "2 mins ago" }
  ];

  const handleAddPersona = () => {
    console.log("Add Persona Clicked");
  };

  return (
    <>
      <Landingnav />
      <PersonaGrid personas={personas} onAddPersona={handleAddPersona} />
    </>
  )
}

export default LandingPage