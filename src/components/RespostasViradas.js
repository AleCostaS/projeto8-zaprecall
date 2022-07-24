export default function RespostasViradas (props){
    const [resposta, contador, incrementarContador] = [props.resposta, props.contador, props.incrementarContador];

    return(
        <div className='perguntaVisivel' >
            <p>{resposta}</p>

            <div className='opcoes'>
                <div className='vermelho' onClick={() => {incrementarContador(contador+1)}}>Não lembrei</div>
                <div className='amarelo' onClick={() => {incrementarContador(contador+1)}}>Quase não lembrei</div>
                <div className='verde' onClick={() => {incrementarContador(contador+1)}}>Zap!</div>
            </div>
        </div>
    );
} 