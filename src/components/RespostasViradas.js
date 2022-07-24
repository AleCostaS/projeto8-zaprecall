export default function RespostasViradas (props){
    const [resposta, contador, incrementarContador, item, respondidas, respondeu, setRespondeu] = [props.resposta, props.contador, props.incrementarContador, props.item, props.virar, props.respondeu, props.setRespondeu];
    
    const respondendo = (e) => {
        let arr = respondeu;
        arr[item] = e;
        console.log(arr)
        setRespondeu(arr);
    }

    return(
        <div className='perguntaVisivel' >
            <p>{resposta}</p>

            <div className='opcoes'>
                <div className='vermelho' onClick={() => {incrementarContador(contador+1); respondidas(item); respondendo(2)}}>Não lembrei</div>
                <div className='amarelo' onClick={() => {incrementarContador(contador+1); respondidas(item); respondendo(3)}}>Quase não lembrei</div>
                <div className='verde' onClick={() => {incrementarContador(contador+1); respondidas(item); respondendo(4)}}>Zap!</div>
            </div>
        </div>
    );
} 