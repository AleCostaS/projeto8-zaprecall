import logo from '../img/logo.png';

export default function Meta(props){
    const metaValida = (e) => {
        if (isNaN(e.target.value) || parseInt(e.target.value) < 1 || e.target.value === ''){
            document.querySelector('.botão').classList.add('desativado')
            document.querySelector('.botão').classList.remove('ativado')
            document.querySelector('.botão').removeEventListener('click', props.mudarTela);
        } else {
            document.querySelector('.botão').classList.remove('desativado')
            document.querySelector('.botão').classList.add('ativado')
            document.querySelector('.botão').addEventListener('click', props.mudarTela);
        }
    };

    return (
        <>
            <div className='meta'>
                <img src={logo} />
                <h1>ZapRecall</h1>
                <input placeholder='Digite sua meta de zaps...' onChange={metaValida}></input>
                {props.button}
            </div>
        </>
    );
}