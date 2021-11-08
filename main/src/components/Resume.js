import React from 'react';
import FadeIn from 'react-fade-in';
import Resume2 from '../Images/Daniel Bradley Resume (1).pdf';
import Download from '../Images/download.png';
// import Downloader from './components/Downloader';
import { Container } from 'react-bootstrap';

const Resume = () => {
  return (

    <FadeIn transitionDuration={1000}>
    <Container fluid="lg bg-dark bg-opacity-75 mb-5 resume-container" id="resume">
      <h1 class="display-4 text-light text-center pt-2 fw-normal">Experience</h1>
      <div class="icon-box">
      <FadeIn transitionDuration={1500} delay={800}>
      <i class="devicon-html5-plain-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={850}>
      <i class="devicon-css3-plain colored  icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={900}>
      <i class="devicon-materialui-plain colored v icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={950}>
      <i class="devicon-bulma-plain colored  icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1000}>
      <i class="devicon-bootstrap-plain colored  icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1050}>
      <i class="devicon-javascript-plain colored  icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1100}>
      <i class="devicon-jquery-plain-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1150}>
      <i class="devicon-react-original-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1200}>
      <i class="devicon-handlebars-plain-wordmark colored text-warning icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1250}>
      <i class="devicon-github-original text-white icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1300}>
      <i class="devicon-git-plain-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1350}>
      <i class="devicon-heroku-original-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1400}>
      <i class="devicon-nodejs-plain-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1450}>
      <i class="devicon-express-original-wordmark text-white icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1500}>
      <i class="devicon-mongodb-plain-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1550}>
      <i class="devicon-graphql-plain-wordmark colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1600}>
      <i class="devicon-mysql-plain-wordmark text-primary icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1650}>
      <i class="devicon-sequelize-plain text-white icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1700}>
      <i class="devicon-vscode-plain colored icon display-4"></i>
      </FadeIn>
      <FadeIn transitionDuration={1500} delay={1750}>
      <i class="devicon-figma-plain colored icon display-4"></i>
      </FadeIn>
      </div>
      <FadeIn transitionDuration={1500} delay={5000}>
      <div className="resume-download-div ">
      <h2>Download My Resume</h2>
      <a href={Resume2} target="_blank" >
        <img src={Download} alt="download-arrow"></img>
      </a>
      </div>
      </FadeIn>
    </Container >
    </FadeIn>
  );
};

export default Resume;
