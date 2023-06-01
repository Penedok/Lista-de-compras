import './botao.css'





const Button = (props)=>{

    return(
        <div className="botoes">
            <button className='btn' onClick={props.onClick}>{props.children}</button>  
        </div>
    )
}


export default Button