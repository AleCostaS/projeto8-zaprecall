import logopequeno from '../img/logo-pequeno.png';

export default function FlashBacks(){

    return (
        <>
            <div className='flashbacks'>
                <div className='topo'>
                    <img src={logopequeno} />
                    <h1>ZapRecall</h1>
                </div>

                <div className='perguntas'>
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                
                <div className='bottom'>
                    CONCLUÍDOS
                </div>
            </div>
        </>
    );
}