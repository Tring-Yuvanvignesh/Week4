import React from 'react'
import PersonaGrid from '../../Components/PersonaCard/PersonaCard';
import sampleImage from '../../Images/login_background.png'
import Landingnav from '../../Components/Landingnav/Landinnav';
import './landingPage.css'

const LandingPage = () => {

  return (
    <>
      <Landingnav />
      <PersonaGrid />
    </>
  )
}

export default LandingPage