import React from 'react';
import ReactDOM from 'react-dom';
// app principal
import IndecisionApp from './components/IndecisionApp';

// React obligatoriamente pide primer letra en mayusculas
// paso de data entre componentes a traves de props. Obtengo
// el atributo desde la invocacion <Header title="ejemplo" />

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
