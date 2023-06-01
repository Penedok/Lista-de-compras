import './produtos.css'


const ProdutosAdicionados =({item, quantidade})=>{

        const apagar = () => {
           let none = document.querySelector('.opcoes')
          none.innerHTML=''
        }
    
    return (

         <div className='caixa-lista'>
            <ul className='opcoes'>
                <li className='lista'>
                    <input type='checkbox' className='input-checkbox'/>
                    <span className='lista-item'>{quantidade} und </span>
                
                    <span className='lista-item'>  {item} </span>
                    <button className='btn-remover' onClick={apagar} >Remover</button>
                </li>
            
            </ul>
         </div>
   


    )


}

export default ProdutosAdicionados

