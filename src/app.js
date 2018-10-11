console.log('App.js esta corriendo');

const app = {
  title: 'Ejemplo',
  subtitle: 'con JSX',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  // obtener el valor que el usuario llenó en la forma
  const option = e.target.elements.option.value;
  if (option) {
    // agrega al arreglo
    app.options.push(option);
    console.log('onFormSubmit', option);
    // limpia input type
    e.target.elements.option.value = '';
  }
  render();
};

// remove all button
// on click borrar todas las opciones.
const onResetButton = (e) => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  // JSX - Javascript XML
  // jsx expresions deven estar encapsuladas en <div>
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'aqui tus opciones ' : 'no hay opciones'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Que debo hacer?</button>
      <button onClick={onResetButton}>Quitar todos</button>
      <ol>
        {
          app.options.map((texto) => {
            return <li key={texto}>{texto}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
