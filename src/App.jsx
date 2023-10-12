import './App.css';
import styled from 'styled-components';
import LOGO from './img/DANIELS-CALCULATOR-LOGO.svg'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import LogoPieDePágina from './img/logo-footer.png';
import { useState } from 'react';
import { evaluate } from 'mathjs'

const LogoContenedor = styled.div`
  width: 100%;
  height: 8px;
  margin: 10rem 0 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 901px) and (max-width:1700px){
    margin: 15rem 0 10rem 0;
  }
`

const Logo = styled.img`
  width: 40%;
  @media screen and (max-width:900px) {
    width: 80%;
  }
`

const CalculadoraContenedor = styled.div`
  width: 400px;
  height: 600px;
  padding: 14px;
  margin-bottom: 10rem;
  background-color: #88d1d9;
  border-radius: 20px;
  border: 5px solid #21666e;

  @media screen and (max-width: 900px){
    width: 80%;
  }
`

const CalculadoraFila = styled.div`
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cffff5;
  padding: 3rem 0;
  border-top: 3px solid #0f4c45;
`

const LogoFooter = styled.img`
  width: 30%;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    width: 70%;
  }

  @media screen and (min-width: 601) and (max-width: 900px){
    width: 60%;
  }
`

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    if (input) {
      if (verificarOperadores(input)) {
        alert("Operadores matemáticos seguidos no son permitidos");
        setInput(''); 
      } else {
        setInput(evaluate(input));
      }
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };
  

  function verificarOperadores(input) {
    const operadores = ['+', '-', '*', '/'];
    for (let i = 0; i < input.length - 1; i++) {
      if (operadores.includes(input[i]) && operadores.includes(input[i + 1])) {
        return true; // Se encontraron operadores seguidos
      }
    }
    return false; // No se encontraron operadores seguidos
  }
  

  return (
    <div className="App">
      <LogoContenedor>
        <Logo src={LOGO} alt='Logo de freeCodeCamp' />
      </LogoContenedor>
      <CalculadoraContenedor>
        <Pantalla input={input}/>
        <CalculadoraFila>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </CalculadoraFila>
        <CalculadoraFila>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </CalculadoraFila>
        <CalculadoraFila>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </CalculadoraFila>
        <CalculadoraFila>
          <Boton manejarClick={calcularResultado} isCalcButton={true}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </CalculadoraFila>
        <CalculadoraFila>
          <BotonClear manejarClear={() => setInput('')}>LIMPIAR</BotonClear>
        </CalculadoraFila>
      </CalculadoraContenedor>
      <Footer>
        <LogoFooter src={LogoPieDePágina}/>
      </Footer>
    </div>
  );
}

export default App;
