import React from 'react'
import { Link } from 'react-router-dom';
import profile_banner from '../assets/profile_banner.png';
import '../styles/ContaCriada.css';

function ContaCriada() {
    return (
        <div className='ContaCriada'>
            <div className='banner' style={{ profile_banner: `url(${profile_banner})` }}></div>

            <div className='texto'>
                <h1>Tudo Certo.
                    Sua conta foi criada com sucesso!</h1>

                <div>
                    <p> Para prosseguir com o agendamento de serviços, cadastre seu pet clicando no botão
                        "Cadastrar pet" abaixo.</p>
                </div>
                </div>


                <div>
                    <Link to="/cadastroPet">
                        <button className='cadastro'>Cadastrar pet</button>
                    </Link>
                </div>

                <div>
                    <Link to="/compras">
                        <button className='loja'>Voltar para a loja</button>
                    </Link>
                </div>
        </div>

            )
}

            export default ContaCriada