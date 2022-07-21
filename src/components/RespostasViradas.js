export default function RespostasViradas (props){
    return(
        <div className='perguntaVisivel' >
            <p>{props.resposta}</p>

            <div className='opcoes'>
                <div className='vermelho' onClick={() => {console.log('aqui')}}>Não lembrei</div>
                <div className='amarelo' onClick={() => {console.log('aqui1')}}>Quase não lembrei</div>
                <div className='verde' onClick={() => {console.log('aqui2')}}>Zap!</div>
            </div>
        </div>
    );
} 