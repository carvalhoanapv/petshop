import React from 'react'
import { useState } from "react";
import '../styles/Perfil.css';
import profile_banner from '../assets/profile_banner.png';
import { Link } from 'react-router-dom';

function Perfil() {
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
                <div className='banner' style={{ backgroundImage: `url(${profile_banner})` }}> </div>

                <div className='headerContainer'>
                    <h2>Crie sua Conta </h2>
                    <h3>Preencha os campos com seus dados</h3>
                </div>

                <div classname='form'>
                    <label>Nome:
                        <input
                            type="text"
                            name="nome "
                            value={inputs.nome || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div classname='form'>
                    <label>CPF:
                        <input
                            type="number "
                            name="age"
                            value={inputs.age || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div classname='form'>
                    <label>Telefone:
                        <input
                            type="fone"
                            name="fone"
                            value={inputs.fone || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div classname='form'>
                    <label>E-mail:
                        <input
                            type="text"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div classname='form'>
                    <label>Senha:
                        <input
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div classname='form'>
                    <label>Confirmar Senha:
                        <input
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='check'>
                    <input value="promo" type="checkbox" onChange={handleChange} />
                    <span> Aceito receber promocões por e-mail </span>
                </div>
                <Link to="/contaCriada">
                    <button className='conta'>Criar conta</button>
                </Link>
            </div>
        </form>
    )
}

export default Perfil
