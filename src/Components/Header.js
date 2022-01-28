/*import React from 'react';
import './Mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core'

function Header() {
const raghava= {
  align: "right",
};
  return (
    <section class="navbar-dark bg-dark header">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">AceJob Services</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link "
                      href="#about">
                      About
                      <span class="sr-only">Us</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"
                      href="#Jobs">
                      Your Jobs
                      <span class="sr-only"></span></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#Ranking">
                      Oppurtunities
                      <span class="sr-only"></span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "
                      href="#alumini">
                      My Network
                      <span class="sr-only"></span></a>
                  </li> </ul>
                 

                  <div class="Search">
        <li>
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
               </li> 
               </div>  
               
                <div class="Rege">
                <li class="nav-item">
                    <a class="nav-link "href="#">
                        
                        <Button class="btn btn-primary"  role="button" style={raghava} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Login/Register
                             
                      </Button>
                     
                      
                      </a>
                      </li>

                      </div>
              </div>

              
            </nav>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Header;*/



import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core'
import { LocalGasStation } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return (
      <section class="navbar navbar-dark bg-dark">
      <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg ">
              <NavLink class="navbar-brand text-white" to="#">AceJob Services</NavLink>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <NavLink class="nav-link "
                      to="#about">
                      About
                      <span class="sr-only">Us</span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link"
                      href="#update">
                      Update
                      <span class="sr-only"></span></NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link"
                      href="#Jobs">
                      Your Jobs
                      <span class="sr-only"></span></NavLink>
                  </li>
                  <li class="nav-item dropdown">
                    <NavLink class="nav-link" href="#Ranking">
                      Oppurtunities
                      <span class="sr-only"></span></NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link "
                      href="#alumini">
                      Neural net
                      <span class="sr-only"></span></NavLink>
                  </li> </ul>
                 

                  <div class="Search">
        <li>
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
               </li> 
               </div>  
               
                <div class="Rege">
                <li class="nav-item">
                    <NavLink class="nav-link "href="#">
                        
                        <button class="btn btn-primary" 
        
                                >
                          Login/Register   
                      </button>
                      
                     
                      
                      </NavLink>
                      </li>

                      </div>
              </div>

              
            </nav>
          </div>
        </div>
      </div>
   
      </div>
      </section>
    )
  }
export default Header;

