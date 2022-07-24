import logo from '../img/logo.png';

export default function Meta(props){
    const [validar, button] = [props.validar, props.button];

    
    const metaValida = (e) => {
        if ((isNaN(e.target.value) === false) && (parseInt(e.target.value) >= 1) && (e.target.value !== '')){
            validar(false);
        } else {
            validar(true);
        }
    };

    return (
        <>
            <div className='meta'>
                <img src={logo} />
                <h1>ZapRecall</h1>
                <input placeholder='Digite sua meta de zaps...' onChange={metaValida}></input>
                {button}
            </div>
        </>
    );
}