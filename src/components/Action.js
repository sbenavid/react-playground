import React from 'react';
// convierto a stateless functional component
const Action = (props) => (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Que debo hacer?
      </button>
    </div>
  );

export default Action;
