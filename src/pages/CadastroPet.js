import React from 'react'
import { useState } from "react";
import '../styles/CadastroPet.css';
import heart_banner from '../assets/heart_banner.png';
import { Link } from 'react-router-dom';

function CadastroPet() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='perfil'> 
                <div className='banner' style={{ backgroundImage: `url(${heart_banner})` }}> </div>

                <div className='headerContainer'>
                <h2>Cadastre o seu Pet</h2>
                </div>

                <div>
                    <label>Nome do pet:
                        <input
                            type="text"
                            name="nome"
                            value={inputs.nome || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Tipo (gato, cão, etc.):
                        <input
                            type="text"
                            name="animal"
                            value={inputs.animal || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Raça:
                        <input
                            type="text"
                            name="breed"
                            value={inputs.breed || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Porte (pequeno, médio, grande):
                        <input
                            type="text"
                            name="porte"
                            value={inputs.porte || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Temperamento do animal:
                        <input
                            type="text"
                            name="temperamento"
                            value={inputs.temperamento || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
               
                <Link to="/contaPetCriada">
                    <button className='cadastro'>Cadastrar</button>
                </Link>
            </div>
        </form>
    )
}

export default CadastroPet