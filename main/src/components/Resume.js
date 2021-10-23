import React from 'react';
import Resume2 from '../Images/Daniel_Bradley_Resume.pdf';


const Resume = () => {
  return (
    <div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5">
      <h1 class="display-4 text-light">Resume</h1>
      <iframe src={Resume2} width="100%" height="500px">
    </iframe>
      
      </div>
    
  );
};

export default Resume;
