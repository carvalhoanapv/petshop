import React from 'react'
import YorkieTosa from '../assets/Yorkie_tosa.png';
import '../styles/Servicos.css';
import { Link } from 'react-router-dom';


function Servicos() {
    const [allchecked, setAllChecked] = React.useState([]);
    function handleChange(e) {
        if (e.target.checked) {
            setAllChecked([...allchecked, e.target.value]);
        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
    }
    return (
        <div className='servicos'>
            <div className='banner' style={{ backgroundImage: `url(${YorkieTosa})` }}>        </div>


            <h1>O banho será para:</h1>

            <h2> 
            <div className='check'>
                <input value="Three" type="radio" name="myRadio1" />
                    <span> Gato (R$ 45,00)</span>
            </div>
            <div className='check'>
                <input value="One" type="radio" name="myRadio1" />
                <span> *Cachorro (Selecione o porte abaixo): </span>
            </div>
            </h2>
            
            <div className='check'>
                <input value="Three" type="radio" name="myRadio2" />
                <span> *Pequeno (até 15kg | R$ 70,00)</span>
            </div>
            <div className='check'>
                <input value="One" type="radio" name="myRadio2" />
                <span> *Médio (entre 16kg e 30kg | R$ 90,00) </span>
            </div>

            <div className='check'>
                <input value="Three" type="radio" name="myRadio2" />
                <span> *Grande (mais de 31kg | R$ 130,00)</span>
            </div>



            <div>
                <h4>
                    {" "}
                    Escolha serviços adicionais (opcionais){" "}

                </h4>

                <div className='check'>
                    <input value="One" type="checkbox" />
                    <span> Cortar unhas (+ R$ 15,00) </span>
                </div>

                <div className='check'>
                    <input value="Two" type="checkbox" />
                    <span> Hidratação (+ R$ 20,00)</span>
                </div>

                <div className='check'>
                    <input value="Three" type="checkbox" />
                    <span> Tosa Higiênica (+ R$ 15,00)</span>
                </div>

                <div className='check'>
                    <input value="Four" type="checkbox" />
                    <span> Tosa Completa (+ R$ 30,00) </span>
                </div>

                <div>
                    <h2>
                        <div>
                            <Link to="/servico-end">
                                <button className='avancar'>Avançar</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/compras">
                                <button className='voltar'>Voltar</button>
                            </Link>
                        </div>
                    </h2>

                </div>
            </div>
        </div>
    )
}

export default Servicos
