import './botao.css'



const Botoes = (props)=>{
    return(
        <div className="botoes">
            <button className='btn'>{props.children}</button>  
        </div>
    )
}


export default Botoes