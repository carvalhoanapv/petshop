import React from 'react';
import { comprasLista } from '../helpers/comprasLista';
import ComprasItem from '../components/comprasItem';
import '../styles/compras.css';

function Compras() {
  return (
    <div className='compras'>
      <h1 className='title'> Compras </h1>
      <div className='comprasLista'>
          {comprasLista.map((comprasItem, key) => {
            return (
              <ComprasItem
                key={key}
                image={comprasItem.image}
                nome={comprasItem.name}
                price={comprasItem.price} 
                />)
          })} 


      </div>

    </div>
  )
}

export default Compras
