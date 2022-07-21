import logo from '../img/logo.png';

export default function EscolhaDeck(props){
    return (
        <>
            <div className='decks'>
                <img src={logo} />
                <h1>ZapRecall</h1>
                <select>
                    <option value='' disabled selected hidden>Escolha seu deck</option>
                </select>
                {props.button}
            </div>
        </>
    );
}