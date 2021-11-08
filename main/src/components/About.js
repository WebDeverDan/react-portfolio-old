import React from 'react';
import Daniel from '../Images/Daniel_Bradley.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import Resume2 from '../Images/Daniel Bradley Resume (1).pdf';
import Download from '../Images/download.png';

const About = () => {
 
  return (
    <FadeIn transitionDuration={1000}>
    <Container fluid="md bg-dark mb-5  pb-3 about-info justify-content-center" id="about">
    <h1 class="display-4 text-light text-center pt-2 fw-normal">About Daniel</h1>
    <Row className="justify-content-center about-details">
    {/* <div className="about-content container-fluid bg-opacity-50"> */}
    <Col sm={8}>
    <p class="lead text-light display-10" style={{fontSize: 25}}>I am a full stack web developer with a front-end focus, and carry a background in visual media production, business, and client relations. As a developer, I'm always interested in expanding my knowledge of various technologies and incoroprating my skills into every application that I build. Display and user experience are front of mind in creating a meaninfgul connection to my work.</p>
    <p class="lead text-light mt-2" style={{fontSize: 25}}>When I'm not coding, I enjoy photography, running, and rollerblading with my Chocolate Lab, Annie!</p>

    </Col>
    <Col sm={3}>
    <img src={Daniel} alt="image of Daniel who is wearing a green shirt" className="Daniel mb-5"/>
    </Col>
    </Row>
    <FadeIn transitionDuration={1000} delay={9000}>
    <div className="resume-download-div-about">
      <h2>Download My Resume</h2>
      <a href={Resume2} target="_blank" >
        <img src={Download} alt="download-arrow"></img>
      </a>
      </div>
      </FadeIn>
</Container>
</FadeIn>
  );
};




export default About;