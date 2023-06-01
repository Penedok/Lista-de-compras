import TextoPrincipal from "./componentes/principal";
import {Modal} from "./componentes/Modal";
import { useState } from "react";







function App() {
  
  const [mercadorias, setMercadorias] = useState([])

  const aoNovoProdutoAdicionado = (produto)=>{
    console.log(mercadorias)
     setMercadorias([...mercadorias, produto])
  }

  return (
   

    <div className="App">
      <TextoPrincipal/>
      <Modal  mercadorias={mercadorias} aoNovoProdutoAdicionado={aoNovoProdutoAdicionado}/>
    
    </div>
  )
}

export default App;
