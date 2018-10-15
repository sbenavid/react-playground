// nesting components
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
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
  // handle delete Options
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  // eliminar una opcion individual
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
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

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));

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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// Valores default para la app
IndecisionApp.defaultProps = {
  options: []
};

// Valores default para el Header
Header.defaultProps = {
  title: 'App basica random'
};

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
};


// lista de opciones disponibles
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Quitar todos</button>
      {props.options.length === 0 && <p>Agregar una opcione para poder iniciar!</p>}
      {
        props.options.map((opcion) => (
          <OptionComponent
            key={opcion}
            optionText={opcion}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

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

    this.setState(() => ({ error }));

    // limpiar cuadro de texto si hubo insert exitoso.
    if (!error) {
      e.target.elements.option.value = '';
    }
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
