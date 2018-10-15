import React from 'react';

// manjea una opcion individual
const OptionComponent = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Quitar
      </button>
    </div>
  );
};

// usar este mecanismo cuando no es una clase
export default OptionComponent;
