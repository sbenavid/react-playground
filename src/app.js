console.log('App.js esta corriendo');

var app = {
  title: 'Ejemplo',
  subtitle: 'con JSX'
}

// JSX - Javascript XML
// jsx expresions deven estar encapsuladas en <div>
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>primero</li>
      <li>segundo</li>
    </ol>
  </div>
);

// se puede referenciar con variables...
// var userName = 'Mikelo';
// var userAge = 40;
// var userLocation = 'New York';

// tambien se puede referenciar con un objeto
var user = {
  name: 'Andrew',
  age: 40,
  location: 'Philadelphia'
};
  // cualquier cosa entre "{}" puede ser una Javascript expression
var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

// toma 2 artumentos, el template y el elemento donde se va a dibujar
ReactDOM.render(template, appRoot);
//ReactDOM.render(template2, appRoot);
