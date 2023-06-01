import './principal.css'
import Button from '../botao'
import Imagem from '../imagem/homem-carrinho.svg'





const TextoPrincipal = () =>{
   
 const Teste =()=>{
    const Tenta = document.querySelector(".teste")
    Tenta.showModal()


 }

    return (
        <div className="caixa-principal">
            <div className="caixa-texto">
                <h2 className="titulo-principal">Monte sua lista de compras</h2>
                <p className="paragrafo-principal">Faça a sua lista de compras adicionando produtos e quantidade. Marcando o check-out dos itens e podendo até remover da sua lista..
                </p>
                <Button onClick={Teste}>Criar Lista</Button>
                <img src={Imagem} className='imagem' alt='homem com o carrinho'/>
             

                
            </div>
        </div>

    )
}


export default TextoPrincipal