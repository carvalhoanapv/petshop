import React from 'react'
import YorkieTosa from '../assets/Yorkie_tosa.png';
import '../styles/Servicos.css';


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

            <h1>Selecione o tipo de Serviço</h1>
            {/* <div>
                <button className='banho'>Banho</button>
            </div>
            <div>
                <button className='tosa'>Banho e Hidratação</button>
            </div>
            <div>
                <button className='tosa'>Banho e Tosa Higiênica</button>
            </div>

            <div>
                <button className='tosa'>Banho e Tosa Completa</button>
            </div> */}

            <div className='check'>
                <input value="One" type="checkbox" onChange={handleChange} />
                <span> Banho </span>
            </div>
            <div className='check'>
                <input value="Two" type="checkbox" onChange={handleChange} />
                <span> Banho e Hidratação </span>
            </div>
            <div className='check'>
                <input value="Three" type="checkbox" onChange={handleChange} />
                <span> Banho e Tosa Higienica </span>
            </div>
            <div className='check'>
                <input value="Four" type="checkbox" onChange={handleChange} />
                <span> Banho e Tosa Completa </span>
            </div>

            <div>
                <h4>
                    {" "}
                    Escolha serviços adicionais (opcionais){" "}

                </h4>

                <div className='check'>
                    <input value="One" type="checkbox" onChange={handleChange} />
                    <span> Escovação de dentes </span>
                </div>
                <div className='check'>
                    <input value="Two" type="checkbox" onChange={handleChange} />
                    <span> Hidratação </span>
                </div>
                <div>
                    <h2>
                        <div>
                            <button className='avancar'>Avançar</button>
                        </div>
                        <div>
                            <button className='voltar'>Voltar</button>
                        </div>
                    </h2>

                </div>
            </div>
        </div>
    )
}

export default Servicos
