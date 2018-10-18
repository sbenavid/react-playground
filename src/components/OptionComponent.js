import React from 'react';

// manjea una opcion individual
const OptionComponent = (props) => (
  <div>
    {props.optionText}
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Quitar
    </button>
  </div>
);

// usar este mecanismo cuando no es una clase
export default OptionComponent;
