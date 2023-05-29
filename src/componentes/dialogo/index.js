 import './dialogo.css'
 import Input from "../input";
 import Botoes from "../botao";
import { useState } from 'react';





const ModoDialogo = () =>{

    const [item, setItem] = useState('')
    const [quantidade, setQuantidade] = useState('')
    
    const aoAdicionar = (evento)=>{
        evento.preventDefault()
        console.log('form foi submetido =>',item, quantidade)
    }


    return(
        <div className="modal">
            <dialog open className="dialogo">
              <form onSubmit={aoAdicionar}>
                <h2 className="texto-dialogo">Lista de Compras</h2>
                <Input label="Nome do Item" 
                type="text"
                 obrigatorio={true} 
                 placeholder="nome item.."
                 valor={item}
                 aoDigitado={valor => setItem(valor)}
                 />
                <Input label="Quantidade" 
                type="number"
                 obrigatorio={true} 
                 placeholder="quantidade item .."
                 valor={quantidade}
                 aoDigitado={valor => setQuantidade(valor)}
                 />
                <Botoes>Adicionar</Botoes>                
              </form>  
            </dialog>
        </div>




    )
}


export default ModoDialogo;