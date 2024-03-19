import React from 'react';
import { comprasLista } from '../helpers/comprasLista';
import ComprasItem from '../components/comprasItem';
import '../styles/compras.css';


function Compras() {
  return (
    <div className='compras'>
      <h1 className='title'> Rações Úmidas e Secas </h1>
      <h className='undertitle'> Cães e Gatos </h>
      <div className='comprasLista'>
          {comprasLista.map((comprasItem, key) => {
            return (
              <ComprasItem
                key={key}
                image={comprasItem.image}
                name={comprasItem.name}
                price={comprasItem.price} 
                button={comprasItem.button}
                />
                );
          })} 
      </div>
    </div>
  );
}

export default Compras
