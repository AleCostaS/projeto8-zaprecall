import logo from '../img/logo.png';

export default function Meta(props){
    
    const metaValida = (e) => {
        if ((isNaN(e.target.value) === false) && (parseInt(e.target.value) >= 1) && (e.target.value !== '')){
            props.validar(false);
        } else {
            props.validar(true);
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