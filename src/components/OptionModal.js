import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOptions}
    contentLabel="Opcion Seleccionada"
  >
    <h3>Opcion Seleccionada</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOptions}>ok</button>
  </Modal>
);

export default OptionModal;
