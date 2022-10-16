function flex(flex){
  let resultado = (flex===true) ? "Sim" : "Não";
  return resultado
  // if(flex==true)
  //   return "Sim"
  // else
  //   return "Não"
 }

function Carro(props) {
  return (
    <div>
      
      <h2>Volksvagem</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {flex(props.isFlex)}</li>
        <li>Adicionado por : {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}

export default Carro;
