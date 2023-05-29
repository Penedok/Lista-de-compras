
import './input.css'

const Input = (props) =>{
   
    const aoDigitado = (evento)=>{
        props.aoDigitado(evento.target.value)  
    }
    
    return(
        <div className="caixaInput">
            <label>
                {props.label}
            </label>
            <input  value={props.valor} onChange={aoDigitado} type={props.type}
             required={props.obrigatorio} placeholder={props.placeholder}
            />
        </div>

    )
}

export default Input