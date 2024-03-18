import React from 'react'

function ComprasItem({ image, name, price }) {
  return (
    <div className='comprasItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> $ {price} </p>
    </div>
  )
}

export default ComprasItem
