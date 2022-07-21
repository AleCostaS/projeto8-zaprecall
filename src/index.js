import ReactDOM from 'react-dom';
import React from "react";
import Meta from './components/Meta';

import './CSS/reset.css';
import './CSS/style.css';



function App() {
    const [tela, setTela] = React.useState(0);

    if (tela === 0){
        return (
            <>
                <Meta button={<div className='botão desativado'>Iniciar Recall!</div>} mudarTela={() => setTela(tela+1)}/>
            </>
        );
    } else {
        return (
            <>
                oi
            </>
        );
    }
   
}

ReactDOM.render(
    <App />, document.querySelector(".root")
);