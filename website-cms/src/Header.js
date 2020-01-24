import React from 'react';
import './Forms.css';


const Header = (props) => {
  return (
    
    <a href ="javascript:history.go(0)" ><img className = "damllogo" src={require("./images/whitedaml.png")} width = "150" height = "100" /> </a>
    
  );
}

export default Header;