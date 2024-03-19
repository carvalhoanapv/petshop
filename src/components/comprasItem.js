import React from 'react'

function ComprasItem({ image, name, price, button }) {
  return (
    <div className='comprasItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h> {name} </h>
      <p> R$ {price} </p>
      <button> {button} </button>
    </div>
  )
}

export default ComprasItem
