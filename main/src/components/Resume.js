import React from 'react';
import Resume2 from '../Images/Daniel Bradley Resume (1).pdf';
import { Container } from 'react-bootstrap';

const Resume = () => {
  return (
    // <div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5">
    <Container fluid="lg bg-dark bg-opacity-75 mt-5 mb-5 resume-container">
      <h1 class="display-4 text-light text-center">Resume</h1>
      <iframe src={Resume2} width="100%" height="500px ">
    </iframe>
    <h2 class="lead display-4 text-light mt-3">Front End Skills</h2>
    <p class="lead text-light display-6">HTML5, CSS, JQuery, JavaScript, Bootstrap, Materialize, Bulma, React, Handlebars.</p>
    <h2 class="lead display-4 text-light">Back End Skills</h2>
    <p class="lead text-light display-6 mb-3">Node.js, Express.js, MySQL, Sequelize, MongoDB, GraphQL, authentication and varification.</p>
      
    </Container >
      // </div>
    
  );
};

export default Resume;
