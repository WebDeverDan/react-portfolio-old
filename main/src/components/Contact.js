import React from 'react';
import Daniel from '../Images/Daniel_Bradley.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
 
  return (

<Container fluid="md bg-dark bg-opacity-75 mt-5 mb-5 contact-container ">

    <h1 class="display-4 text-light text-center">Contact Daniel</h1>
    <Row >
    <Col sm={6}>
    <div className="contact-list text-light bg-opacity-25">
    <h2 >Email</h2>
    <p class="lead text-light">danielbvideo@gmail.com</p>
    <h2 >Phone</h2>
    <p class="lead text-light">828-585-1884</p>
    <h2 >GitHub</h2>
    <p class="lead text-light">https://github.com/WebDeverDan</p>
    <h2 >Design Portfolio</h2>
    <p class="lead text-light">www.danielbvideo.com</p>
    </div>
    </Col>
    <Col sm={6}>
    <div className="contact-form text-light">
    <h2 >Leave a Comment!</h2>
    <label for='full-name'>Full Name</label>
        <input
          type='text'
          class='form-control fst-italic'
          id='full-name'
          placeholder='Full Name'
          required
        />
         <label for='email-address'>Email Address</label>
        <input
          type='text'
          class='form-control fst-italic'
          id='email-address'
          placeholder='Email Address'
          required
        />
        <label for='first-name'>Phone Number</label>
        <input
          type='text'
          class='form-control fst-italic'
          id='phone-number'
          placeholder='Phone Number'
          required
        />
        <label for='comment'>Leave a Comment</label>
        <input
          type='text'
          class='form-control fst-italic pb-5'
          id='comment'
          placeholder='Comment'
          required
        />
        <div className="submitB">
        <a className="navbar-brand enter-btn mt-1" href=""> Submit</a>
        </div>
    
    </div>
    </Col>
    
    
    
</Row>
</Container>
  );
};




export default Contact;