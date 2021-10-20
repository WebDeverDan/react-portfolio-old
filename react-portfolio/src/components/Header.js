import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  // const onClick = () => {
  //     console.log('click')
  // }
  return (
    <header className="header">
      <div className="page_title">
      <h1>{title}</h1>
      </div>
      <div class="container">
  <nav class="navbar navbar-collapse navbar-light">
      <div className="container-fluid d-flex justify-content-end">
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="navbar-brand" href="#">Navbar</a>
      </div>
  </nav>
</div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Daniel Bradley',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
