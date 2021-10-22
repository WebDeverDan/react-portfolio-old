import React from 'react';

const Header = () => {
  return (
    <div classnName="nav-box">
    <nav class="navbar navbar-expand-lg bg-opacity-50 navbar-dark bg-dark">
  <a class="navbar-brand text-light">Daniel Bradley</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active text-light" href="/about">About</a>
      <a class="nav-item nav-link text-light" href="/portfolio">Portfolio</a>
      <a class="nav-item nav-link text-light" href="/contact">Contact</a>
      <a class="nav-item nav-link text-light" href="/resume">Resume</a>
    </div>
  </div>
</nav>
</div>
    
  );
};

export default Header;
