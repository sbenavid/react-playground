import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};


// Valores default para el Header
Header.defaultProps = {
  title: 'App basica que usa random'
};

// usar este mecanismo cuando no es una clase
export default Header;
