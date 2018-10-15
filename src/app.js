import React from 'react';
import ReactDOM from 'react-dom';
// app principal
import IndecisionApp from './components/IndecisionApp';

// React obligatoriamente pide primer letra en mayusculas
// paso de data entre componentes a traves de props. Obtengo
// el atributo desde la invocacion <Header title="ejemplo" />

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name= "Miguel";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hola me llamo ${this.name}`;
  }
}

const oldSyn = new OldSyntax();
const getGreeting = oldSyn.getGreeting();
console.log(getGreeting);

class NewSyntax {
  name= 'gines';
  getGreeting = () => {
    return `Hola me llamo ${this.name}`;
  }
}

const nuevo = new NewSyntax();
const saludo = nuevo.getGreeting;
console.log(saludo());
