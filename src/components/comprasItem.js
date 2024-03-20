import React from 'react'

function ComprasItem({image, nome, price}) {
  return (
    <div className='comprasItem'>
      <div> style={{ backgroundImage: `url(${image})` }} </div>
      <h1> {nome} </h1>
      <p> $ {price} </p>
    </div>
  )
}

export default ComprasItem
