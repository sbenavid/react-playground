import React from 'react';

// agregar una nueva opcion
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  // local methods
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    // limpiar cuadro de texto si hubo insert exitoso.
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Agregar nuevo</button>
        </form>
      </div>
    )
  }
}
