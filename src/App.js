import TextoPrincipapl from "./componentes/principal";
import ModoDialogo from "./componentes/dialogo";


function App() {
  return (
    <div className="App">
      <TextoPrincipapl/>
      <ModoDialogo label="Nome do Item que deseja adicionar" placeholder="Nome Item"/>
    
 
    </div>
  );
}

export default App;
