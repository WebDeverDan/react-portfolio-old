import React from 'react';
import Daniel from '../Images/Daniel_Bradley.jpg'

const About = () => {
 
  return (
   

<div class="bg-light p-5 .flex-column d-flex-column rounded-lg m-5 about">
    <h1 class="display-4">About Daniel</h1>
    <div className="about-content container-fluid bg-light">
    <p class="lead">I am a full stack web developer with a front-end focus, and carry a background in visual media production, business, and client relations. I bring my strong design background, knack for user experience, and understanding of full stack web application development to the table.</p>
    <img src={Daniel} className="Daniel" />
    </div>
    <div className="skills bg-light">
    <h2>Front End</h2>
    <p class="lead">HTML5, CSS, JQuery, JavaScript, Bootstrap, Materialize, Bulma, React, Handlebars, WordPress and Squarespace</p>
    <h2>Back End</h2>
    <p class="lead">Node.js, Express.js, MySQL, Sequelize, MongoDB, GraphQL, and various npms.</p>
</div>
</div>
  );
};




export default About;