import logo from '../img/logo.png';

export default function EscolhaDeck(props){

    const deckValido = (e) => {
        props.validar(false);
        props.escolhido(e.target.value);
    };

    return (
        <>
            <div className='decks'>
                <img src={logo} />
                <h1>ZapRecall</h1>
                <select onChange={deckValido}>
                    <option value='' disabled selected hidden>Escolha seu deck</option>
                    {props.decksNames.map((nome, item) => {
                        return (
                            <Opcoes 
                                value={item+1} 
                                name={nome}
                            />);
                    })}
                </select>
                {props.button}
            </div>
        </>
    );
}

function Opcoes(props){
    return (
        <option value={props.value}>{props.name}</option>
    );
}