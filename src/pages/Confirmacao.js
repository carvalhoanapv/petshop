import React from 'react'
import { Link } from 'react-router-dom';
import heart_banner from '../assets/heart_banner.png';
import '../styles/Confirmacao.css';

function Confirmacao() {
    return (
        <div className='confirmacao'>
            <img src={heart_banner} alt="banner" />
            <h1>Tudo Certo!</h1>
            <h2>Seu agendamento foi realizado com sucesso!</h2>
            <div>
                <h2>Recomendações:</h2>
                <p>
                    <ul>
                        <li>Esteja com tudo pronto no horário agendado.</li>
                        <li>Esteja com o telefone por perto para caso o motorista precise entrar em contato.</li>
                        <li>Caso haja algum imprevisto, ligue para a nossa equipe o quanto antes para reagendar o horário.</li>
                    </ul>
                </p>
            </div>
            <div>
                <Link to="/compras">
                    <button className='voltar'>Ir para a loja</button>
                </Link>
            </div>
        </div>
    )
}

export default Confirmacao