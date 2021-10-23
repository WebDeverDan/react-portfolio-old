import React from 'react';
import Daniel from '../Images/Daniel_Bradley.jpg'

const About = () => {
 
  return (
   

<div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5">
    <h1 class="display-4 text-light">About Daniel</h1>
    <div className="about-content container-fluid bg-opacity-50">
    <p class="lead text-light">I am a full stack web developer with a front-end focus, and carry a background in visual media production, business, and client relations. I bring my strong design background, knack for user experience, and understanding of full stack web application development to the table.</p>
    <img src={Daniel} alt="image of Daniel who is wearing a green shirt" className="Daniel" />
    </div>
    <div className="skills text-light bg-opacity-25">
    <h2 >Front End</h2>
    <p class="lead text-light">HTML5, CSS, JQuery, JavaScript, Bootstrap, Materialize, Bulma, React, Handlebars, WordPress and Squarespace</p>
    <h2>Back End</h2>
    <p class="lead text-light">Node.js, Express.js, MySQL, Sequelize, MongoDB, GraphQL, and various npms.</p>
</div>
</div>
  );
};




export default About;