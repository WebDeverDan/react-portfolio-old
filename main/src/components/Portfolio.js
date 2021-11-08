import React from 'react';
import FadeIn from 'react-fade-in';
import Gamer from '../Images/gamernew.png';
import Weather from '../Images/Weather2.png';
import Lego from '../Images/Lego2.png';
import Beer from '../Images/beer.png';
import Planner from '../Images/Daily_planner.png';
import Fitness from '../Images/fitness-tracker.png';
import { Container, Fade } from 'react-bootstrap';

const styles = {
  bold: { fontWeight: 'bold' },
};
const Portfolio = () => {
  return (
    <FadeIn transitionDuration={1000}>
      <Container
        className="bg-dark bg-opacity-75 portfolio-container mb-5"
        id="portfolio"
      >
        <h1 class="display-4 text-light text-center pt-2 fw-normal">
          Web Portfolio
        </h1>

        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card h-100 project-box">
              <img
                class="card-img-top lego-img"
                src={Lego}
                alt="image of The Lego Collector app homepage"
              />
              <div class="bg-light desc-box">
                <div class="card-body project-title-box bg-dark">
                  <h1 class="card-title text-light">The Lego Collector</h1>
                </div>
                <p class="card-text p-2">
                  The Lego Collector is an independent project aimed for
                  collectors to inventory and keep track of, and calculate the
                  value of their Lego collection. Users have the option to add,
                  update, and delete figures and sets.
                  <br />
                  <br />
                  <span style={styles.bold}>Technologies used: </span>HTML5,
                  CSS, Bootstrap5, Javascript, JQuery, Handlebars.js, Node.js,
                  Express.js, and MySQL.
                </p>
                <div className="git-dep bg-dark pb-1 pt-1 mb-0">
                  <div className="git bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://the-lego-collector.herokuapp.com/"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                    </h2>
                  </div>
                  <div className="dep bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://github.com/WebDeverDan/Minifigure-Inventory-Tracker"
                        target="_blank"
                      >
                        Github Repo
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card h-100 project-box">
              <img
                class="card-img-top gamer-img"
                src={Gamer}
                alt="image of the Confused Gamer app homepage"
              />
              <div class="bg-light desc-box">
                <div class="card-body project-title-box bg-dark">
                  <h1 class="card-title text-light">Confused Gamer</h1>
                </div>
                <p class="card-text p-2">
                  An application designed to give users the abilty to find a new
                  video game based on platform selection. Also allows user to
                  save games to a favorite list so they can return to view the
                  list at a later date.
                  <br />
                  <br />
                  <span style={styles.bold}>Technologies used: </span>HTML5,
                  CSS, Materialize, Javascript, JQuery, and Giant Bomb API.
                </p>
                <br />
                <div className="git-dep bg-dark pb-1 pt-1 mb-0">
                  <div className="git bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://webdeverdan.github.io/Confused-Gamer/"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                    </h2>
                  </div>
                  <div className="dep bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://github.com/WebDeverDan/Confused-Gamer"
                        target="_blank"
                      >
                        Github Repo
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card h-100 project-box">
              <img
                class="card-img-top weather-img"
                src={Weather}
                alt="image of the Weather Forecast app homepage"
              />
              <div class="bg-light desc-box">
                <div class="card-body project-title-box bg-dark">
                  <h1 class="card-title text-light">Weather Forecast</h1>
                </div>
                <p class="card-text p-2">
                  A simple weather searching application that allows users to
                  find the weather of a city. It provides local and global
                  current and 5 day weather forecasts, including temperature,
                  windspeed, humidity, precitpiation and UV index.
                  <br />
                  <br />
                  <span style={styles.bold}>Technologies used: </span>HTML5,
                  CSS, Javascript, JQuery, and OpenWeather API.
                </p>
                <br />
                <div className="git-dep bg-dark pb-1 pt-1 mb-0">
                  <div className="git bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://webdeverdan.github.io/Weather-Dashboard/"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                    </h2>
                  </div>
                  <div className="dep bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://github.com/WebDeverDan/Weather-Dashboard"
                        target="_blank"
                      >
                        Github Repo
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card h-100 project-box">
              <img
                class="card-img-top beer-img"
                src={Beer}
                alt="image of the Mix 'n' Match app homepage"
              />
              <div class="bg-light desc-box">
                <div class="card-body project-title-box bg-dark">
                  <h1 class="card-title text-light">Mix 'n' Match</h1>
                </div>
                <p class="card-text p-2">
                  A dating/friendship web application that matches users based
                  on beer preference. Features validation to enhance security
                  and user experience. Future development includes more
                  customizable matching functionality.
                  <br />
                  <br />
                  <span style={styles.bold}>Technologies used: </span>HTML5,
                  CSS, Javascript, JQuery, Handlebars.js, Node.js, Express.js,
                  Cloudinary, Multer, and MySQL.
                </p>
                <br />
                <div className="git-dep bg-dark pb-1 pt-1 mb-0">
                  <div className="git bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://frozen-inlet-56976.herokuapp.com/login"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                    </h2>
                  </div>
                  <div className="dep bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://github.com/WebDeverDan/project-2-full-stack"
                      >
                        Github Repo
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card h-100 project-box">
              <img
                class="card-img-top planner-img"
                src={Planner}
                alt="image of the Daily Planner app homepage"
              />
              <div class="bg-light desc-box">
                <div class="card-body project-title-box bg-dark">
                  <h1 class="card-title text-light">Daily Planner</h1>
                </div>
                <p class="card-text p-2">
                  A simple day planning app that allows users to add and delete
                  notes. The color scheme changes based on the time of the day
                  to better visualize each hour
                  <br />
                  <br />
                  <span style={styles.bold}>Technologies used: </span>HTML5,
                  CSS6, & Javascript
                </p>
                <br />
                <div className="git-dep bg-dark pb-1 pt-1 mb-0">
                  <div className="git bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://webdeverdan.github.io/Daily-Planner/"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                    </h2>
                  </div>
                  <div className="dep bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://github.com/WebDeverDan/Daily-Planner"
                      >
                        Github Repo
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card h-100 project-box">
              <img
                class="card-img-top fitness-img"
                src={Fitness}
                alt="image of the Fitness Tracker app homepage"
              />
              <div class="bg-light desc-box">
                <div class="card-body project-title-box bg-dark">
                  <h1 class="card-title text-light">Fitness Tracker</h1>
                </div>
                <p class="card-text p-2">
                  A fitness plan tracker which allows the user to add a new
                  workout, edit that workout, and afterwards see the aggregated
                  statistics from the week.
                  <br />
                  <br />
                  <span style={styles.bold}>Technologies used: </span>HTML5,
                  CSS, Javascript, MongoDB.
                </p>
                <br />
                <div className="git-dep bg-dark pb-1 pt-1 mb-0">
                  <div className="git bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://rocky-everglades-83809.herokuapp.com/?id=6169e181daaa4f00169ba7da"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                    </h2>
                  </div>
                  <div className="dep bg-light">
                    <h2>
                      <a
                        className="portfolio-title"
                        href="https://github.com/WebDeverDan/Fitness-Tracker"
                        target="_blank"
                      >
                        Github Repo
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FadeIn>
  );
};

export default Portfolio;
