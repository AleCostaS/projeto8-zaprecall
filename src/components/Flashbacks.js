import logopequeno from '../img/logo-pequeno.png';
import PerguntaVirada from './PerguntasViradas';
import React from "react";
import Pergunta from './Pergunta';

export default function FlashBacks(props){
    let arr1 = [];

    for (let i=0; i < props.ordem.length; i++){{
        arr1.push(false);  
    }}

    const [virado, setVirado] = React.useState(arr1);

    const virar = (e) => {
        let arr2 = [];
        for (let i=0; i < props.ordem.length; i++){{
            if (i === parseInt(e)){
                arr2.push(true)
            } else {
                arr2.push(false);  
            }
        }}
        setVirado(arr2);
    }

    return (
        <>
            <div className='flashbacks'>
                <div className='topo'>
                    <img src={logopequeno} />
                    <h1>ZapRecall</h1>
                </div>

                <div className='perguntas'>
                    {Object.keys(props.deckEscolhido).map((item) => {
                        if (!virado[item]){
                            return <PerguntaVirada numero={parseInt(item)+1} virar={virar} item={item}/>;
                        } else {
                            return <Pergunta pergunta={props.deckEscolhido[props.ordem[item]].pergunta} />
                        }
                        
                    })}
                    
                </div>
                
                <div className='bottom'>
                    0/{props.deckEscolhido.length} CONCLUÍDOS
                </div>
            </div>
        </>
    );
}