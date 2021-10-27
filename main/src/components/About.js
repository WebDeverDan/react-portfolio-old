import React from 'react';
import Daniel from '../Images/Daniel_Bradley.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
 
  return (
   
<Container fluid="md bg-dark bg-opacity-75 mt-5 mb-5 about-info">
{/* <div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5"> */}
    <h1 class="display-5 text-light text-center pt-2">About Daniel</h1>
    <Row className="justify-content-center about-details">
    {/* <div className="about-content container-fluid bg-opacity-50"> */}
    <Col sm={8}>
    <p class="lead text-light display-10" style={{fontSize: 25}}>I am a full stack web developer with a front-end focus, and carry a background in visual media production, business, and client relations. While currently seeking a career change, I am bringing my strong design background, knack for user experience, and understanding of full stack web application development to the table.</p>
    <p class="lead text-light mt-2" style={{fontSize: 25}}>When I'm not coding, I enjoy photography, running, and rollerblading with my dog, Annie. I look forward to exploring future projects with you!</p>

    </Col>
    <Col sm={3}>
    <img src={Daniel} alt="image of Daniel who is wearing a green shirt" className="Daniel mb-5"/>
    </Col>
    </Row>
    {/* </div> */}
    
</Container>
  );
};




export default About;