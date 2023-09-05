import logo from './logo.svg';
import './App.css';
import {Component} from 'react';



class App extends Component {
  state = {
    estudantes:[
      {
      matricula:1,
      nome:"Gabriel Lopes da Silva",
      curso:"Informática para Internet",
      turma:"6-D"
      },
      {
      matricula:2,
      nome:"Lucas Pereira Bonetti",
      curso:"Informática para Internet",
      turma:"6-D"
      },
      {
      matricula:3,
      nome:"Gabriel dos Santos Souza",
      curso:"Informática para Intenet",
      turma:"6-D"
      }
    ]
  }

  render(){
    const {estudantes} = this.state; //atribuindo via desestruturação
    return(
      <div>
        {estudantes.map(estudante => (
          <div key = {estudante.matricula}>
            <h1> {estudante.nome} </h1>
            <p> {estudante.curso} </p>
            <p> {estudante.turma} </p>
            
          </div>
        ))}
      </div>
    )
  }
}

export default App;
