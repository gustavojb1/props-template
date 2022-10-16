import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  function apresentaGaragem(){
    alert("Boas Vindas Gustavo")
  }
  function apresentaGaragem2(){
    alert("Boas Vindas Qualquer Um")
  }

  return (
    <div>
      <Garagem nome={"Gustavo Barbosa"} mensagemApresentacao={apresentaGaragem}/>
      <Garagem nome={"Qualquer Um"} mensagemApresentacao={apresentaGaragem2}/>
    </div>
  );
}
