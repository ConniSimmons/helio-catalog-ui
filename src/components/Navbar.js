import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import "../App.scss";

export default class NavBar extends Component {
    render() {
        return(
         
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="https://http.cat/418.jpg" target="_blank" rel="noopener noreferrer" className="navbar-brand">
              HelioMade
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/catalog"} className="nav-link">
                  Glossary
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>
        </div>
         
        );      
    }   
}