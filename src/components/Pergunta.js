import setinha from '../img/setinha.png';

export default function Pergunta(props){
    const [pergunta, virar, item] = [props.pergunta, props.virar, props.item];

    return(
        <div className='perguntaVisivel' >
            <p>{pergunta}</p>
            <img src={setinha} onClick={() => {virar(item)}} />
        </div>
    );
} 