import React from 'react';
import {NavLink} from 'react-router-dom';





const Header = () => {
  // const location = useLocation();

   
  return (
    
  <nav class="navbar navbar-expand-lg  navbar-dark bg-dark d-flex justify-content-between">
  <div className="nav-title">
  <h1 class="text-light title-header" style={{fontSize: 35}}>Daniel Bradley - Web Developer</h1>
  </div>
  <div className="nav-items">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse  p-4" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
      <li class="nav-item nav-link text-light header-text" ><NavLink exact activeClassName="active" to='/about'>About</NavLink></li>
      <li class="nav-item nav-link text-light header-text"><NavLink activeClassName="active" to='/portfolio'>Portfolio</NavLink></li>
      <li class="nav-item nav-link text-light header-text"><NavLink activeClassName="active" to='/resume'>Resume</NavLink></li>
      <li class="nav-item nav-link text-light header-text"><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>

    </ul>
    </div>
  </div>
</nav>

    
  );
};

export default Header;
