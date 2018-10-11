// nesting components
class IndecisionApp extends React.Component {
  render() {
    const title='Mi ejemplo';
    const subtitle = 'A ver que te toca hacer';
    const options = ['la primera', 'la segunda', 'esta es la tercera'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options arreglo={options}/>
        <AddOption />
      </div>
    );
  }
}

// React obligatoriamente pide primer letra en mayusculas
// paso de data entre componentes a traves de props. Obtengo
// el atributo desde la invocacion <Header title="ejemplo" />
class Header extends React.Component {
  // react components require render
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

// otra clase
class Action extends React.Component {
  // manejo de eventos con este metodo
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Que debo hacer?</button>
      </div>
    );
  }
}

//Boton para quitar todas las opciones


// lista de opciones disponibles
class Options extends React.Component {
  handleRemoveAll() {
    alert('handle remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Quitar todos</button>
        {this.props.arreglo.length}
        {
          this.props.arreglo.map((opcion) => <OptionComponent key={opcion} optionText={opcion} />)
        }
        <OptionComponent />
      </div>
    )
  }
}

// una sola opcione
class OptionComponent extends React.Component {

  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

// agregar una nueva opcion
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Agregar nuevo</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
