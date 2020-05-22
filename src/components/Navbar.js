import React from 'react';
import { Link,NavLink } from 'react-router-dom';
function Navbar(){
  return(
     <nav className="main-nav">
        <img className="logo" src={require('../photo/sirla-logo.png')} alt="Background"/>
        <h2 className="Navbar-title">FJU Times</h2>
        <ul className="menu">
            <li>
                <NavLink className="link" exact to="/">Home</NavLink>          
            </li>
            <li>
                 <NavLink  className="link" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink  className="link" to="/new">New</NavLink>        
            </li>
        </ul>
    </nav>
  )
  }

export default Navbar