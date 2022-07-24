export default function PerguntaVirada(props){
    const [numero, virar, item] = [props.numero, props.virar, props.item];

    return (
        <div className='pergunta' onClick={() => {virar(item)}}>
            <p>Pergunta {numero}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}