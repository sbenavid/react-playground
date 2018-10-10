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

// tambien se puede referenciar con un objeto
const user = {
  name: 'Andrew',
  age: 22,
  location: 'CDMX'
};
  // cualquier cosa entre "{}" puede ser una Javascript expression
const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >=18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

// toma 2 artumentos, el template y el elemento donde se va a dibujar
ReactDOM.render(template, appRoot);
