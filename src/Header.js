import React from 'react';
import './Forms.css';


const Header = (props) => {
  return (
    <div className = "header">
    <a href ="/" ><img alt = "DAML Logo" className = "damllogoh" src={require("./images/whitedaml.png")} width = "150" height = "100" /> </a>
    <h1>Duke Applied Machine Learning</h1>
    </div>
  );
}

export default Header;