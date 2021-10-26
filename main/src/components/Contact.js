import React,{ useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  validateEmail } from '../utils/helpers';

const Contact = () => {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasBlur, setBlur] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };

  // const handleFormBlur = (e) => {
  // }
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid. Please try again!');
      return;
    } else { setErrorMessage(false)}
    
    setEmail('')
  };

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
    <Col sm={5}>
    <div className="contact-form text-light">
    <h2 >Leave a Comment!</h2>
    
    <label for='full-name'>Full Name</label>
        <input
          type='text'
          class='form-control fst-italic'
          id='full-name'
          placeholder="Full Name"
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = "Don't forget your name!"} 
          required
        />
         <label for='email-address'>Email Address</label>
        <input
          type='email'
          value={email}
          name='email'
          class='form-control fst-italic'
          id='email-address'
          placeholder='Email Address'
          onChange={handleInputChange}
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = "Don't forget your email!"}
          />
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        <label for='first-name'>Phone Number</label>
        <input
          type='text'
          class='form-control fst-italic'
          id='phone-number'
          placeholder='Phone Number'
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = "Don't forget your number!"}
          required
        />
        <label for='comment'>Leave a Comment</label>
        <input
          type='text'
          class='form-control fst-italic pb-5'
          id='comment'
          placeholder='Comment'
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = "Enter a comment if you want!"}
          required
        />
        <div className="submitB">
        <a className="navbar-brand enter-btn mt-1" href="/contact" onClick={handleFormSubmit}> Submit</a>
        </div>
        
    </div>
    
    </Col>
    
    
    
</Row>
</Container>
  );
};

  




export default Contact;