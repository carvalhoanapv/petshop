import React from 'react'
import YorkieTosa from '../assets/Yorkie_tosa.png';
import '../styles/Servicos.css';
import { Link } from 'react-router-dom';

function Servico2() {
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

            <h1>Escolha as opções</h1>

            <label>
                <input value="One" type="radio" name= "myRadio" />
                <span> Levar meu pet à loja </span>
            </label>
            <label>
                <input value="Two" type="radio" name='myRadio' />
                <span> *Tele-busca </span>
            </label>

            <div>
                <h4>
                    {" "}
                    Preencha com o endereço de busca:{" "}

                </h4>
                <div>
                    <label>Rua:
                        <input
                            type="text"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Número da casa/prédio:
                        <input
                            type="number"
                            onChange={handleChange}
                        />
                    </label>
                    <label> No. apartamento:
                        <input
                            type="number"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>CEP:
                        <input
                            type="number"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Cidade:
                        <input
                            type="text"
                            onChange={handleChange}
                        />
                    </label>
                    <label> UF:
                        <input
                            type="text"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                <p> * O serviço de Tele-Busca possui uma taxa que é calculada proporcionalmente à distância da casa à loja.</p>
            </div>
                <div>
                    <h2>
                        <div>
                        <Link to="/servico-final">
                                <button className='avancar'>Avançar</button>
                            </Link>
                        </div>
                        <div>
                        <Link to="/servicos">
                            <button className='voltar'>Voltar</button>
                            </Link>
                        </div>
                    </h2>
                </div>
            </div>
            
        </div>
    )
}

export default Servico2