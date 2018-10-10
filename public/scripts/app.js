'use strict';

console.log('App.js esta corriendo');

var app = {
  title: 'Ejemplo',
  subtitle: 'con JSX'

  // JSX - Javascript XML
  // jsx expresions deven estar encapsuladas en <div>
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'primero'
    ),
    React.createElement(
      'li',
      null,
      'segundo'
    )
  )
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
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

// toma 2 artumentos, el template y el elemento donde se va a dibujar
ReactDOM.render(template, appRoot);
//ReactDOM.render(template2, appRoot);
