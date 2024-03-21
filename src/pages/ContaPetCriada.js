import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/ContaPetCriada.css';

function ContaPetCriada() {
    return (
        <div className='contaPetCriada'>
            <div className='texto'>
            <h1>Tudo Certo.
                Cadastro do pet feito com sucesso!
            </h1>
            </div> 

            <div className='agendamento'>
                <h2>
                    Que tal agendar um Banho e Tosa para seu pet?
                </h2>
                
                <h2>
                    Aqui na Patinhas Felizes, seu amiguinho é cuidado pelos melhores profissionais.
                </h2>
            </div>
            <div>
                <Link to="/agendamento">
                    <button className='agendamento'>Agendar</button>
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

export default ContaPetCriada