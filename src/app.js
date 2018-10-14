// nesting components
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  // handle delete Options
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  // seleccionar una opcion aleatoriamente
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  // agregar una nueva opcion
  handleAddOption(option) {
    // validar que no este vacio el string "option"
    if (!option) {
      return 'No dejar la opcion vacia';
    } else if (this.state.options.indexOf(option) > -1 ) {
      // ya se registro ese texto, no aceptar repetidos
      return 'Esta opcion ya fue escrita!';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
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
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
// React obligatoriamente pide primer letra en mayusculas
// paso de data entre componentes a traves de props. Obtengo
// el atributo desde la invocacion <Header title="ejemplo" />


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
}


// lista de opciones disponibles
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Quitar todos</button>
      {props.options.length}
      {
        props.options.map((opcion) => <OptionComponent key={opcion} optionText={opcion} />)
      }
      <OptionComponent />
    </div>
  );
}

// manjea una opcion individual
const OptionComponent = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
}


// agregar una nueva opcion
class AddOption extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  // local methos
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Agregar nuevo</button>
        </form>
      </div>
    )
  }
}

// stateless functional component
// only need to return the JSX code
// los props se pasan como argumento
// son mas rapidas que las class component
const User = (props) => {
  return (
    <div>
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
    </div>
  )
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
