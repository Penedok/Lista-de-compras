import './principal.css'
import Botoes from "../botao"




const TextoPrincipapl = () =>{
    return (
        <div className="caixa-principal">
            <div className="caixa-texto">
                <h2 className="titulo-principal">Monte sua lista de compras</h2>
                <p className="paragrafo-principal">Faça a sua lista de compras adicionando os itens que deseja!
                Podendo ajustar a quatidade marcando o check-out dos itens e podendo até remover da sua lista..
                </p>
            <Botoes>Criar lista</Botoes>    
            </div>
        </div>

    )
}

export default TextoPrincipapl