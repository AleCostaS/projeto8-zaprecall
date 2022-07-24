import logopequeno from '../img/logo-pequeno.png';
import PerguntaVirada from './PerguntasViradas';
import React from "react";
import Pergunta from './Pergunta';
import RespostasViradas from './RespostasViradas.js';

export default function FlashBacks(props){
    const [ordem, deckEscolhido, contador, incrementarContador] = [props.ordem, props.deckEscolhido, props.contador, props.incrementarContador];
    let arr1 = [];

    for (let i=0; i < ordem.length; i++){
        arr1.push(false);  
    }

    const [virado, setVirado] = React.useState(arr1);
    const [resposta, setResposta] = React.useState(arr1);
    const [respondeu, setRespondeu] = React.useState(arr1);

    const virar = (e) => {
        let arr2 = [];
        for (let i=0; i < ordem.length; i++){{
            if (i === parseInt(e)){
                arr2.push(true)
            } else {
                arr2.push(false);  
            }
        }}

        // perguntar pro monitor
        let arr1 = [];
        for (let i=0; i < ordem.length; i++){
            arr1.push(false);  
        }

        setVirado(arr2);
        setResposta(arr1);
    }

    const respostas = (e) => {
        let arr2 = [];
        for (let i=0; i < ordem.length; i++){{
            if (i === parseInt(e)){
                arr2.push(true)
            } else {
                arr2.push(false);  
            }
        }}
        setResposta(arr2);
    }

    const respondidas = (e) => {
        let arr2 = [];
        for (let i=0; i < ordem.length; i++){{
            if (i === parseInt(e)){
                arr2.push(true)
            } else {
                arr2.push(false);  
            }
        }}
        setRespondeu(arr2);
    }

    return (
        <>
            <div className='flashbacks'>
                <div className='topo'>
                    <img src={logopequeno} />
                    <h1>ZapRecall</h1>
                </div>

                <div className='perguntas'>
                    {Object.keys(deckEscolhido).map((item) => {
                        if (respondeu[item] === 2){
                            return (
                                <PerguntaVirada 
                                    numero={parseInt(item)+1} 
                                    virar={virar} 
                                    item={item}
                                    icone='close-circle'
                                    classe='pergunta errado'
                                />
                            );
                        } else if (respondeu[item] === 3){
                            return (
                                <PerguntaVirada 
                                    numero={parseInt(item)+1} 
                                    virar={virar} 
                                    item={item}
                                    icone='help-circle'
                                    classe='pergunta meiocerto'
                                />
                            );
                        }  else if (respondeu[item] === 4){
                            return (
                                <PerguntaVirada 
                                    numero={parseInt(item)+1} 
                                    virar={virar} 
                                    item={item}
                                    icone='checkmark-circle'
                                    classe='pergunta certo'
                                />
                            );
                        } else if (virado[item]){
                            if (!resposta[item]){
                                return (
                                    <Pergunta 
                                        pergunta={deckEscolhido[ordem[item]].pergunta} 
                                        virar={respostas} 
                                        item={item}
                                    />
                                );
                            } else if (!respondeu[item]){
                                return (
                                    <RespostasViradas 
                                        resposta={deckEscolhido[ordem[item]].resposta} 
                                        incrementarContador={incrementarContador} 
                                        contador={contador}
                                        virar={respondidas}
                                        item={item}
                                        respondeu={respondeu}
                                        setRespondeu={setRespondeu}
                                    />
                                );
                            }
                        } else {
                            return (
                                <PerguntaVirada 
                                    numero={parseInt(item)+1} 
                                    virar={virar} 
                                    item={item}
                                    icone='play-outline'
                                    classe='pergunta'
                                />
                            );
                        }
                    })}
                </div>
                
                <div className='bottom'>
                    {contador}/{deckEscolhido.length} CONCLUÍDOS
                </div>
            </div>
        </>
    );
}