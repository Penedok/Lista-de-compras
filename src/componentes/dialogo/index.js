 import Input from "../input";
 import Botoes from "../botao";

const ModoDialogo = () =>{
    return(
        <div className="modal">
            <dialog open className="dialogo">
                <h2 className="texto-dialogo">Lista de Compras</h2>
                <Input label="Nome do Item" type="text"/>
                <Input label="Quantidade" type="number"/>
                <Botoes button="Adicionar"/>
            </dialog>
        </div>




    )
}


export default ModoDialogo;