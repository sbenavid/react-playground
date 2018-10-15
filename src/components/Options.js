import React from 'react';
import OptionComponent from './OptionComponent';
// lista de opciones disponibles
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Quitar todos</button>
      {props.options.length === 0 && <p>Agregar una opcione para poder iniciar!</p>}
      {
        props.options.map((opcion) => (
          <OptionComponent
            key={opcion}
            optionText={opcion}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

// usar este mecanismo cuando no es una clase
export default Options;
