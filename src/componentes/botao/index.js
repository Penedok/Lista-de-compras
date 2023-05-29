import './botao.css'



const Botoes = (props)=>{
    return(
        <div className="botoes">
            <button>{props.button}</button>
        </div>
    )
}


export default Botoes