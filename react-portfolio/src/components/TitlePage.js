import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  // const onClick = () => {
  //     console.log('click')
  // }
  return (
    <div>
    <div className="title-header">
      <h1>Daniel Bradley</h1>
    </div>
    <div className="title-page">
        <h1 className="web-developer">Web Developer</h1>
        <a className="navbar-brand enter-btn" href="#">Enter</a>
    </div>
    </div>
  );
};

Title.defaultProps = {
  title: 'Daniel Bradley',
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;