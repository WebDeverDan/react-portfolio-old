import React from 'react';
import { Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';





const Header = () => {
  // const location = useLocation();

   
  return (
    
  <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between header mb-5" sticky="top">
    
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between header"></nav> */}
  <div className="nav-title">
  <h1 className="text-light title-header" style={{fontSize: 50}}>Daniel Bradley</h1>
  </div>
  <div className="nav-items">
  <button className="navbar-toggler mr-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
      <li className="nav-item nav-link text-light header-text" ><NavLink exact activeClassName="active" to='/'>About</NavLink></li>
      {/* <li className="nav-item nav-link text-light header-text" ><a href="#about" activeClassName="active">About</a></li> */}
      <li className="nav-item nav-link text-light header-text"><NavLink activeClassName="active" to='/portfolio'>Portfolio</NavLink></li>
      {/* <li className="nav-item nav-link text-light header-text" activeClassName="active"><a href="#portfolio">Portfolio</a></li> */}
      <li className="nav-item nav-link text-light header-text"><NavLink activeClassName="active" to='/resume'>Experience</NavLink></li>
      {/* <li className="nav-item nav-link text-light header-text" activeClassName="active"><a href="#resume">Resume</a></li> */}
      <li className="nav-item nav-link text-light header-text"><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>
      {/* <li className="nav-item nav-link text-light header-text" activeClassName="active"><a href="#contact">Contact</a></li> */}

    </ul>
    </div>
  </div>
</Navbar>

    
  );
};

export default Header;
