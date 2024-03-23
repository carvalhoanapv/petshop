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
                <h3>
                    Que tal agendar um Banho e Tosa para ele?
                </h3>

                <h3>
                    Aqui na Patinhas Felizes, seu amiguinho é cuidado pelos melhores profissionais.
                </h3>
            </div>
            <div>
                <Link to="/servicos">
                    <button className='agendar'>Agendar</button>
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