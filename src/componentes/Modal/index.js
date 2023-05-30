import './modal.css'
import Inputs from '../input'
import Botoes from "../botao"
import { useState } from 'react'




 export const Modal = () =>{
    const [item, setItem] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const aoAdicionar = (evento) => {
        evento.preventDefault();
        console.log('form foi submetido =>', item, quantidade);
    };
    return(
        
        <div>
            <dialog open  className="teste">
                <form onSubmit={aoAdicionar}>
                    <h2 className="texto-dialogo">Lista de Compras</h2>
                    <Inputs label="Nome do Item"
                    type="text"
                    obrigatorio={true}
                    placeholder="nome item.."
                    valor={item}
                    aoDigitado={valor => setItem(valor)} />
                    <Inputs label="Quantidade"
                    type="number"
                    obrigatorio={true}    
                    placeholder="quantidade item .."
                    valor={quantidade}
                    aoDigitado={valor => setQuantidade(valor)} />
                    <Botoes>Adicionar</Botoes>
                    </form>
            </dialog>        
        </div>
    )

}
