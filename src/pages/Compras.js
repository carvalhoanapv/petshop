import React from 'react';
import { comprasLista } from '../helpers/comprasLista';
import comprasItem from '../components/comprasItem';
import '../styles/compras.css';

function Compras() {
  return (
    <div className='compras'>
      <h1 className='title'> Compras </h1>
      <div className='comprasLista'>
        <div className='comprasItem'> {comprasLista.map((comprasItem, key) => {
          return <comprasItem 
          key={key}
          image={comprasItem.image} 
          nome={comprasItem.nome} 
          price={comprasItem.price}/>
        })} </div>

      </div>

    </div>
  )
}

export default Compras
