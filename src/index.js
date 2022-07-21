import ReactDOM from 'react-dom';
import React from "react";
import Meta from './components/Meta';
import EscolhaDeck from './components/EscolhaDeck';

import './CSS/reset.css';
import './CSS/style.css';

function App() {
    const [tela, setTela] = React.useState(0);

    const decks = [
        {
            'nome':'React',
            'pergunta1':{
                'pergunta':'O que é JSX?', 
                'resposta':'Uma extensão de linguagem do JavaScript'
            },
            'pergunta2':{
                'pergunta':'O React é __', 
                'resposta':'uma biblioteca JavaScript para construção de interfaces'
            },
            'pergunta3':{
                'pergunta':'Componentes devem iniciar com __', 
                'resposta':'letra maiúscula'
            },
            'pergunta4':{
                'pergunta':'Podemos colocar __ dentro do JSX', 'resposta':'expressões'},
            'pergunta5':{
                'pergunta':'O ReactDOM nos ajuda __', 
                'resposta':'interagindo com a DOM para colocar componentes React na mesma'},
            'pergunta6':{
                'pergunta':'Usamos o npm para __', 
                'resposta':'gerenciar os pacotes necessários e suas dependências'},
            'pergunta7':{
                'pergunta':'Usamos props para __', 
                'resposta':'passar diferentes informações para componentes'},
            'pergunta8':{
                'pergunta':'Usamos estado (state) para __', 
                'resposta':'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
        }
    ];

    if (tela === 0){
        return (
            <>
                <Meta button={<div className='botão desativado'>Iniciar Recall!</div>} mudarTela={() => setTela(tela+1)}/>
            </>
        );
    } else if (tela === 1){
        const names = [];
        for (let i =0; i < decks.length; i++){
            names.push(decks[i].nome);
        }
        console.log(names)
        return (
            <>
                <EscolhaDeck button={<div className='botão desativado'>Iniciar Recall!</div>} mudarTela={() => setTela(tela+1)} decksNames={names}/>
            </>
        );
    }  else {
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