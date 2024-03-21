import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Confirmacao.css';

function Confirmacao() {
  return (
    <div className='confirmacao'>
            <h1>Tudo Certo!
                Agendamento do banho do seu pet feito com sucesso com sucesso!</h1>
            <div>
                <p>Recomendações:
                <ul>
                    <li>Esteja com tudo pronto no horário agendado.</li>
                    <li>Esteja com o telefone por perto para caso o motorista precise entrar em contato.</li>
                    <li>Caso haja algum imprevisto, ligue para a nossa equipe o quanto antes para reagendar o horário.</li>
                </ul>    
                </p>
            </div>
            <div>
                <Link to="/">
                    <button className='home'>Tudo pronto</button>
                </Link>
            </div>
        </div>
  )
}

export default Confirmacao