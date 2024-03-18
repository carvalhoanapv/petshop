import React from 'react'
import YorkieTosa from '../assets/Yorkie_tosa.png';

function Servicos() {
    return (
        <div className='servicos'>
            <div className='servicosLista'
                style={{ backgroundImage: `url(${YorkieTosa})` }}>
            </div>
            <div className='servicosItem'></div>
        </div>
    )
}

export default Servicos
