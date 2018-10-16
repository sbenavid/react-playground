import React from 'react';


// Agrego el estilo para el encabezdo, a traves de "className"
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>        
  </div>
);

// Valores default para el Header
Header.defaultProps = {
  title: 'App basica que usa random'
};

// usar este mecanismo cuando no es una clase
export default Header;
