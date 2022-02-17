import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <main className="main">
          {conteudos.map((elem, index) => 
          <ul key={index}>
            <li>O conteúdo é: {elem.conteudo} <br>
            </br> Status: {elem.status} <br>
            </br>  Bloco: {elem.bloco}</li> 
            </ul>)} 
          </main>
    )
  }
};

export default Content;