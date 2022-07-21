import logopequeno from '../img/logo-pequeno.png';
import Pergunta from './Perguntas';

export default function FlashBacks(props){
    console.log(props.deckEscolhido)

    return (
        <>
            <div className='flashbacks'>
                <div className='topo'>
                    <img src={logopequeno} />
                    <h1>ZapRecall</h1>
                </div>

                <div className='perguntas'>
                    {Object.keys(props.deckEscolhido).map((item) => {
                        return <Pergunta numero={parseInt(item)+1}/>
                    })}
                    
                </div>
                
                <div className='bottom'>
                    0/{props.deckEscolhido.length} CONCLUÍDOS
                </div>
            </div>
        </>
    );
}