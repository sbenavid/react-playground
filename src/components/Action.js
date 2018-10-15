import React from 'react';
// convierto a stateless functional component
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Que debo hacer?
      </button>
    </div>
  );
};

export default Action;
