export default function PerguntaVirada(props){
    return (
        <div className='pergunta' onClick={() => {props.virar(props.item)}}>
            <p>Pergunta {props.numero}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}