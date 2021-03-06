import React from 'react'
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Toolbar } from '@material-ui/core';
import logo from './logo.png';
const Navbar = () => {
    return (
        <>
        <div className="container-fulid nav_bg">
            <div className='row'>
              <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">
                    <Toolbar position="absolute" >
                    <img src={logo} alt="logo" height="39" width="50"></img>
                <h4>  AceJob Services</h4>
                </Toolbar>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
        <div  
        className="collapse navbar-collapse" 
        id="navbarSupportedContent">
            
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item active">
            <NavLink 
            
            exact
            className="nav-link" to="/">
                Home 
            </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
         activeClassName="menu_active"
         exact
        className="nav-link" to="/about">
            About
            </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
         activeClassName="menu_active"
         exact
        className="nav-link" to="/services">
            Sevices
            </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
         activeClassName="menu_active"
         exact
        className="nav-link" to="/contact">
            Contact
            </NavLink>
            
      </li>
      <li className="nav-item">
        <NavLink 
         activeClassName="menu_active"
         exact
        className="nav-link" to="/Login">
            Login
            </NavLink>
            
      </li>
      
      </ul>
      
    </div>
  </nav>
</div>
</div>
</div>
        </>
    );
};

export default Navbar;