import React from 'react';
// componentes creados
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  // handle delete Options
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  // eliminar una opcion individual
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  // seleccionar una opcion aleatoriamente
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  // agregar una nueva opcion
  handleAddOption = (option) => {
    // validar que no este vacio el string "option"
    if (!option) {
      return 'No dejar la opcion vacia';
    } else if (this.state.options.indexOf(option) > -1 ) {
      // ya se registro ese texto, no aceptar repetidos
      return 'Esta opcion ya fue escrita!';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  // metodo principal que se llama al montar
  componentDidMount() {
    // validacion de formato correcto
    try {
      const json = localStorage.getItem('opciones');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // no es necesario hacer nada en caso de error.
    }
  }
  // otro metod principal. Como argumentos recibe los estatus previos
  componentDidUpdate(prevProps, prevState) {
    // solamente guardar la data si el arreglo de opciones previo es diferente
    // al actual
    if (prevState.options.length !== this.state.options.length) {
      // convierte el json a string
      const json = JSON.stringify(this.state.options);
      // lo guarda usando "localStorage"
      localStorage.setItem('opciones',json)
    }
  }
  // cuando se desaparece el componente
  componentWillUnmount() {
    console.log('componente quitado');
  }

    render() {
    const subtitle = 'A ver que te toca hacer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
