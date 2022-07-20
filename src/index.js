import ReactDOM from 'react-dom';

import './CSS/reset.css';
import './CSS/style.css';
import logo from './img/logo.png' 

ReactDOM.render(
    <>
        <div className='meta'>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <input placeholder='Digite sua meta de zaps...'></input>
            <div className='botão desativado'>Iniciar Recall!</div>
        </div>
    </>,
    document.querySelector(".root")
);