import React from 'react'
import Logo from '../assets/logo_petshop.png'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt="logo" />
        <div className='rightSide'>
          <Link to='/petshop'> Inicio </Link>
          <Link to='/compras'> Compras </Link>
          <Link to='/promocoes'> Promoções </Link>
          <Link to='/servicos'> Banho e Tosa </Link>
          <Link to='/perfil'> Perfil </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
