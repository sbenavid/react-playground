import React from 'react';
import ReactDOM from 'react-dom';
// app principal
import IndecisionApp from './components/IndecisionApp';

// React obligatoriamente pide primer letra en mayusculas
// paso de data entre componentes a traves de props. Obtengo
// el atributo desde la invocacion <Header title="ejemplo" />

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render((
  <Layout>
    <div>
      <h1>mi pag</h1>
      <p>Qué bonito!</p>
    </div>
  </Layout>
  ), document.getElementById('app'));
