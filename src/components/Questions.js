import {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Quesions({title, info}) {

    const [showInfo, setShow] = useState(false);

    return (
        <article className="Quesion">
            <header>
                <h4>{title}</h4>
                <button className='Btn' onClick={_ => setShow(!showInfo)}>
                    { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </header>
            { showInfo && <p className='Desc'>{info}</p> }
        </article>
    );
}

export default Quesions;
