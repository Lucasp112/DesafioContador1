import React, { Component } from "react";
import styled from "styled-components";
import "./styles.css";

const ContainerGeral = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20vw;
  height: 60vh;
  background-color: white;
  border-radius: 10%;
`;

const Titulo = styled.h1`
  color: red;
  font-size: 7rem;
`;

const Btn = styled.button`
  color: white;
  font-size: 1.8rem;
  width: 5vw;
  height: 3vh;
  margin: 0.5rem;
  border-radius: 20%;
  border: none;
  background-color: red;
  &:hover {
    background-color: #000;
    cursor: pointer;
  }
`;

class Contador extends Component {
  state = {
    numero: 0
  };

  adicionar = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  subtrair = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        <ContainerGeral>
          <Box>
            <Titulo>{this.state.numero}</Titulo>
            <div>
              <Btn onClick={this.adicionar}>+</Btn>
              <Btn onClick={this.subtrair}>-</Btn>
            </div>
          </Box>
        </ContainerGeral>
      </>
    );
  }
}

export default Contador;
