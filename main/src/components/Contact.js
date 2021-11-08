import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Container, Row, Col } from 'react-bootstrap';
import { validateEmail } from '../utils/helpers';

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
    } else {
      setErrorMessage(false);
    }

    setEmail('');
  };

  return (
    <FadeIn transitionDuration={1000}>
      <Container
        fluid="md bg-dark bg-opacity-75 mb-5 contact-container"
        id="contact"
      >
        <h1 class="display-4 text-light text-center pt-2 fw-normal">
          Contact Daniel
        </h1>
        <Row>
          <Col sm={6}>
            <div className="contact-list text-light bg-opacity-25">
              <FadeIn transitionDuration={1000} delay={800}>
                <h2>Email</h2>
                <p class="lead text-light">danielbvideo@gmail.com</p>
              </FadeIn>
              <FadeIn transitionDuration={1000} delay={850}>
                <h2>Phone</h2>
                <p class="lead text-light">828-585-1884</p>
              </FadeIn>
              <FadeIn transitionDuration={1000} delay={900}>
                <h2>GitHub</h2>
                <p class="lead text-light">https://github.com/WebDeverDan</p>
              </FadeIn>
              <FadeIn transitionDuration={1000} delay={950}>
                <h2>LinkedIn</h2>
                <p class="lead text-light">
                  https://www.linkedin.com/in/daniel-bradley828/
                </p>
              </FadeIn>
              <FadeIn transitionDuration={1000} delay={1000}>
                <h2>Design Portfolio</h2>
                <p class="lead text-light">www.danielbvideo.com</p>
              </FadeIn>
            </div>
          </Col>
        </Row>
      </Container>
    </FadeIn>
  );
};

export default Contact;
