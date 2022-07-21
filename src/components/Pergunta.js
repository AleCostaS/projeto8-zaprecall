import setinha from '../img/setinha.png';

export default function Pergunta(props){
    return(
        <div className='perguntaVisivel' >
            <p>{props.pergunta}</p>
            <img src={setinha} onClick={() => {props.virar(props.item)}} />
        </div>
    );
} 