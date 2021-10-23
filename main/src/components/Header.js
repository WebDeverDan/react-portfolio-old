import React from 'react';

const Header = () => {
  return (
    <div classnName="nav-box ">
    <nav class="navbar navbar-expand-lg bg-opacity-50 navbar-dark bg-dark d-flex justify-content-between">
  <div className="nav-title">
  <a class="text-light title-header">Daniel Bradley</a>
  </div>
  <div className="nav-items">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active text-light header-text" href="/about">About</a>
      <a class="nav-item nav-link text-light header-text" href="/portfolio">Portfolio</a>
      <a class="nav-item nav-link text-light header-text" href="/resume">Resume</a>
      <a class="nav-item nav-link text-light header-text" href="/contact">Contact</a>

    </div>
    </div>
  </div>
</nav>
</div>
    
  );
};

export default Header;
