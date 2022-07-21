import logo from '../img/logo.png';

export default function EscolhaDeck(props){
    console.log(props)

    const deckValido = () => {
        document.querySelector('.botão').classList.remove('desativado')
        document.querySelector('.botão').classList.add('ativado')
        document.querySelector('.botão').addEventListener('click', props.mudarTela);
    };

    return (
        <>
            <div className='decks'>
                <img src={logo} />
                <h1>ZapRecall</h1>
                <select onChange={deckValido}>
                    <option value='' disabled selected hidden>Escolha seu deck</option>
                    {props.decksNames.map((nome, item) => {
                        return <Opções value={item+1} name={nome}/>;
                    })}
                </select>
                {props.button}
            </div>
        </>
    );
}

function Opções(props){
    return (
        <option value={props.value}>{props.name}</option>
    );
}