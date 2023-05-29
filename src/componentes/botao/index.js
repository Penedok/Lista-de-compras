import './botao.css'



const Botoes = (props)=>{
    return(
        <div className="botoes">
            <button>{props.children}</button>  
        </div>
    )
}


export default Botoes