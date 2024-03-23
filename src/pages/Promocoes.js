import React from 'react'
import { Carrossel } from "../components/Carrossel";
import { Link } from "react-router-dom";

function Promocoes() {
  
  return (
    <div className="carrossel">
      <Carrossel  />
      <div>
     <Link to="/">
         <button className='voltar'>Voltar</button>
         </Link>
     </div>
    </div>
    
  )
}

export default Promocoes