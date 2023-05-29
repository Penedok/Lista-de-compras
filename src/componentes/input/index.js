import './input.css'

const Input = (props) =>{
    return(
        <div className="caixaInput">
            <label>{props.label}</label>
            <input type={props.type} />
        </div>

    )
}

export default Input