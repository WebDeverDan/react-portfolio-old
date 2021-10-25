import React from 'react';
import Resume2 from '../Images/Daniel Bradley Resume (1).pdf';
import { Container } from 'react-bootstrap';

const Resume = () => {
  return (
    // <div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5">
    <Container fluid="md bg-dark bg-opacity-75 mt-5 mb-5 resume-container">
      <h1 class="display-4 text-light text-center">Resume</h1>
      <iframe src={Resume2} width="100%" height="500px ">
    </iframe>
      
    </Container >
      // </div>
    
  );
};

export default Resume;
