import ReactDOM from 'react-dom';
import React from "react";
import Meta from './components/Meta';
import EscolhaDeck from './components/EscolhaDeck';

import './CSS/reset.css';
import './CSS/style.css';

function App() {
    const [tela, setTela] = React.useState(0);
    const [invalido, setInvalido] = React.useState(true);

    const decks = [
        {
            'nome':'React',
            'perguntas':[{
                'pergunta':'O que é JSX?', 
                'resposta':'Uma extensão de linguagem do JavaScript'
            }, {
                'pergunta':'O React é __', 
                'resposta':'uma biblioteca JavaScript para construção de interfaces'
            }, {
                'pergunta':'Componentes devem iniciar com __', 
                'resposta':'letra maiúscula'
            }, {
                'pergunta':'Podemos colocar __ dentro do JSX', 
                'resposta':'expressões'
            }, {
                'pergunta':'O ReactDOM nos ajuda __', 
                'resposta':'interagindo com a DOM para colocar componentes React na mesma'
            }, {
                'pergunta':'Usamos o npm para __', 
                'resposta':'gerenciar os pacotes necessários e suas dependências'
            }, {
                'pergunta':'Usamos props para __', 
                'resposta':'passar diferentes informações para componentes'
            }, {
                'pergunta':'Usamos estado (state) para __', 
                'resposta':'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
            }]
            
        }
    ];

    if (tela === 0){
        return (
            <>
                {invalido ? (
                    <Meta button={<div className='botão desativado'>Iniciar Recall!</div>} validar={(v) => setInvalido(v)}/>
                    ) : (
                    <Meta button={<div className='botão ativado' onClick={() => {setTela(tela+1); setInvalido(true);}}>Iniciar Recall!</div>}  validar={(v) => setInvalido(v)} />
                )}
            </>
        );
    } else if (tela === 1){
        const names = [];

        for (let i =0; i < decks.length; i++){
            names.push(decks[i].nome);
        }

        return (
            <>
                {invalido ? (
                    <EscolhaDeck button={<div className='botão desativado'>Iniciar Recall!</div>} decksNames={names} validar={(v) => setInvalido(v)}/>
                    ) : (
                    <EscolhaDeck button={<div className='botão ativado' onClick={() => {setTela(tela+1); setInvalido(true);}}>Iniciar Recall!</div>} decksNames={names} validar={(v) => setInvalido(v)}/>
                )}
            </>
        );
    } else if (tela === 2) {
        return (
            <>
                <div>Em obras</div>
            </>
        );
    }
   
}

ReactDOM.render(
    <App />, document.querySelector(".root")
);