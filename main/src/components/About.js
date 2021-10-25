import React from 'react';
import Daniel from '../Images/Daniel_Bradley.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
 
  return (
   
<Container fluid="md bg-dark bg-opacity-75 mt-5 mb-5">
{/* <div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5"> */}
    <h1 class="display-4 text-light">About Daniel</h1>
    <Row className="justify-content-center">
    {/* <div className="about-content container-fluid bg-opacity-50"> */}
    <Col sm={8}>
    <p class="lead display-6 text-light">I am a full stack web developer with a front-end focus, and carry a background in visual media production, business, and client relations. I bring my strong design background, knack for user experience, and understanding of full stack web application development to the table.</p>

    </Col>
    <Col sm={4}>
    <img src={Daniel} alt="image of Daniel who is wearing a green shirt" className="Daniel mb-3" />
    </Col>
    </Row>
    {/* </div> */}
    <div className="skills  text-light bg-opacity-25">
    <h2 class="lead display-4 text-light">Front End</h2>
    <p class="lead text-light display-6">HTML5, CSS, JQuery, JavaScript, Bootstrap, Materialize, Bulma, React, Handlebars</p>
    <h2 class="lead display-4 text-light">Back End</h2>
    <p class="lead text-light display-6">Node.js, Express.js, MySQL, Sequelize, MongoDB, GraphQL, authentication and varification.</p>
</div>
</Container>
  );
};




export default About;