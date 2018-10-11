// nesting components
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

// React obligatoriamente pide primer letra en mayusculas
class Header extends React.Component {
  // react components require render
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Vamos a ver</h2>
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
        <OptionComponent />
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
        <p>Mi texto</p>
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
