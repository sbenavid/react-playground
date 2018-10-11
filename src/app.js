console.log('App.js esta corriendo');

const app = {
  title: 'Ejemplo',
  subtitle: 'con JSX',
  options: ['uno', 'dos']
}

// JSX - Javascript XML
// jsx expresions deven estar encapsuladas en <div>
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'aqui tus opciones ' : 'no hay opciones'}</p>
    <ol>
      <li>primero</li>
      <li>segundo</li>
    </ol>
  </div>
);

// metodo local
function getLocation(lugar) {
  if (lugar) {
    return <p>Location:{lugar}</p>;
  }
}

let count = 0;
const someId = 'myId';
const addOne = () => {
  console.log('addOne')
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset');
};

// cualquier cosa entre "{}" puede ser una Javascript expression
// class -> className
const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button id={someId} onClick={addOne} className="button">+1</button>
    <button onClick={minusOne} className="button">-1</button>
    <button onClick={reset} className="button">reset</button>
  </div>
);


const appRoot = document.getElementById('app');

// toma 2 artumentos, el template y el elemento donde se va a dibujar
ReactDOM.render(template2, appRoot);
