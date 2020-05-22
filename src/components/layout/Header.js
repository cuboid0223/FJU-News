import React from 'react';
import { Link } from 'react-router-dom';
function Header(props){
  return(
    <header className="header">
      <div className="container">
        <h1>{props.title}</h1> 
        <p>{props.subtitle}</p>
        <img src="https://img.icons8.com/material-sharp/24/000000/github.png"/>
        <img src="https://img.icons8.com/ios/26/000000/facebook-new.png"/>
      </div>
    </header>
  )
}



export default Header