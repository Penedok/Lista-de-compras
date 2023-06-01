
import './input.css'


const Inputs = (props) =>{
     
    return(
        <div className="caixaInput">
            <label>
                {props.label}
            </label>
            <input  value={props.valor} onChange={props.aoDigitado} type={props.type}
             required={props.obrigatorio} placeholder={props.placeholder}
            />
        </div>

    )
}

export default Inputs