import './modal.css'
import Inputs from '../input'
import Button from "../botao"
import { useState } from 'react'
import ProdutosAdicionados from '../ProdutosAdicionado'




 export const Modal = (props) =>{
    const [item, setItem] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const aoAdicionar = (evento) => {
        evento.preventDefault();
        const produto =    {
          item: item,
          quantidade: quantidade
        }
        props.aoNovoProdutoAdicionado(produto)
        setItem('')
        setQuantidade('')
    }


    return(
        
        <div>
            <dialog className="teste">
                <form onSubmit={aoAdicionar}>
                    <h2 className="texto-dialogo">Lista de Compras</h2>
                    <Inputs label="Produto"
                    type="text"
                 
                    placeholder="Produto.."
                    valor={item}
                    aoDigitado={(evento) => setItem(evento.target.value)} />

                    <Inputs label="Quantidade"
                    type="number"
                   
                    placeholder="Quantidade .."
                    valor={quantidade}
                    aoDigitado={(evento) => setQuantidade(evento.target.value)} />

                    <Button>Adicionar</Button>
                    {props.mercadorias.map((mercadorias, index) => <ProdutosAdicionados key={index} item={mercadorias.item} quantidade={mercadorias.quantidade}
                   
                    
                    />)}
                </form>    
            </dialog>        
        </div>
    )

}
