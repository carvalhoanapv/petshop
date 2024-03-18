import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/Gatos_foto1.png';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home' 
    style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div
        className='headerContainer'
      >
        <h1> Petshop Patinhas Felizes </h1>
        <p> A casa do seu pet </p>
      </div>
    </div>
  )
}

export default Home
