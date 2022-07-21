export default function RespostasViradas (props){
    return(
        <div className='perguntaVisivel' >
            <p>{props.resposta}</p>

            <div className='opcoes'>
                <div className='vermelho' onClick={() => {props.incrementarContador(props.contador+1)}}>Não lembrei</div>
                <div className='amarelo' onClick={() => {props.incrementarContador(props.contador+1)}}>Quase não lembrei</div>
                <div className='verde' onClick={() => {props.incrementarContador(props.contador+1)}}>Zap!</div>
            </div>
        </div>
    );
} 