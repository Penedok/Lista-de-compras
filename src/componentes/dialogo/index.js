 import Input from "../input";

const ModoDialogo = () =>{
    return(
        <div className="modal">
            <dialog open className="dialogo">
                <Input label="Nome do Item" type="text"/>
                <Input label="Quantidade" type="number"/>
            </dialog>
        </div>




    )
}

export default ModoDialogo;