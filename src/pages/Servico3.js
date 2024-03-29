import React, { useState } from 'react'
import calendar_banner from '../assets/calendar_banner.png';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Servico3.css';

function Servico3() {
    const [date, setDate] = useState(new Date());
    const [allchecked, setAllChecked] = React.useState([]);
    function handleChange(e) {

        if (e.target.checked) {
            setAllChecked([...allchecked, e.target.value]);
        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
    }
    return (
        <div className='servicos3'>
            <h1>Selecione a data</h1>

            <div>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>

            <div>
                <h4>
                    {" "}
                    Digite o Horário Desejado (8:00 às 19:00):{" "}

                </h4>
                <div>
                    <label>Horário:
                        <input
                            type="text"
                            onChange={handleChange}
                        />
                    </label>
                </div>

            </div>

            <div>
                <div>
                    <Link to="/confirmacao">
                        <button className='avancar'>Avançar</button>
                    </Link>
                </div>
                <div>
                    <Link to="/servico-end">
                        <button className='voltar'>Voltar</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Servico3