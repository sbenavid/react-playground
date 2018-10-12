// nesting components
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['la primera', 'segunda', 'esta es la tercera']
    }
  }
  // handle delete Options
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    const title='Mi ejemplo';
    const subtitle = 'A ver que te toca hacer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          Que debo hacer?
        </button>
      </div>
    );
  }
}

// lista de opciones disponibles
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Quitar todos</button>
        {this.props.options.length}
        {
          this.props.options.map((opcion) => <OptionComponent key={opcion} optionText={opcion} />)
        }
        <OptionComponent />
      </div>
    )
  }
}

// una sola opcion
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
