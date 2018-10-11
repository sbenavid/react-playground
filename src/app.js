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
  render() {
    return (
      <div>
        <button>Que debo hacer?</button>
      </div>
    );
  }
}

// lista de opciones disponibles
class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        <button>Agregar uno nuevo</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
