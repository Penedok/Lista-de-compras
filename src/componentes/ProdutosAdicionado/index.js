import './produtos.css';




const ProdutosAdicionados =({item, quantidade})=>{

    const apaga =() =>{
        const deleta = document.querySelector('.opcoes')
        deleta.parentNode.removeChild(deleta)


    }


    return (
         <div className='caixa-lista'>
            <ul className='opcoes'>
                <li className='lista'>
                    <input type='checkbox' className='input-checkbox'/>
                    <span className='lista-item'> {quantidade} und </span>
                
                    <span className='lista-item'> {item} </span>

                    <button className='btn-remover' onClick={apaga}>Remover</button>
                </li>
                
            
            </ul>
         </div>
   


    )


}

export default ProdutosAdicionados

