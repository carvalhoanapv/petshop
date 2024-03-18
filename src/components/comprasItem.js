import React from 'react'

function comprasItem({image, nome, price}) {
  return (
    <div className='comprasItem'>
      <div> style={{ backgroundImage: `url(${image})` }} </div>
      <h1> {nome} </h1>
      <p> $ {price} </p>
    </div>
  )
}

export default comprasItem
