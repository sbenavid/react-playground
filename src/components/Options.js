import React from 'react';
import OptionComponent from './OptionComponent';
// lista de opciones disponibles
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">your options</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Quitar todos
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Agregar una opcione para poder iniciar!</p>}
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

// usar este mecanismo cuando no es una clase
export default Options;
