import Carro from "./Carro";


function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Clique aqui</button>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2020} isFlex={true}/>
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2018} isFlex={true}/>
      <Carro adicionadoPor={props.nome} cor={"Roxo"} ano={2015} isFlex={false}/>
      <Carro adicionadoPor={props.nome} cor={"Azul"} ano={2010} isFlex={false}/>
    </div>
  );
}

export default Garagem;
