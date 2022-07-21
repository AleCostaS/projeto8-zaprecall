export default function Pergunta(props){
    return (
        <div className='pergunta'>
            <p>Pergunta {props.numero}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}