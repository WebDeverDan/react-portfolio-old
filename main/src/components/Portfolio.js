import React from 'react';
import Gamer from '../Images/gamernew.png';
import Weather from '../Images/Weather2.png';
import Lego from '../Images/Lego2.png';
import Beer from '../Images/beer.png';
import Planner from '../Images/planner.png';
import Fitness from '../Images/fitness-tracker.png';
import {Container} from 'react-bootstrap'

const Portfolio = () => {
  return (
    <Container className="bg-dark bg-opacity-75 portfolio-container mt-5 mb-5">
      <h1 class="display-4 text-light text-center">Web Portfolio</h1>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card h-100 project-box m-2 border border-dark">
            <img class="card-img-top " src={Lego} alt="" />
            <div class="card-body">
              <h4 class="card-title">
                <a
                  className="portfolio-title"
                  href="https://the-lego-collector.herokuapp.com/"
                >
                  The Lego Collector
                </a>
              </h4>
              <p class="card-text">
                The Lego Collector is an independent project aimed for
                collectors to inventory and keep track of, and calculate the
                value of their Lego collection. Users have the option to add,
                update, and delete figures and sets. Mobile view is currently in
                development.
              </p>
              <p>
                Technologies used: HTML5, CSS6, Javascript, JQuery,
                Handlebars.js, Node.js, Express.js, and MySQL.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100 project-box m-2 border border-dark">
            <img class="card-img-top" src={Gamer} alt="" />
            <div class="card-body">
              <h4 class="card-title">
                <a
                  className="portfolio-title"
                  href="https://webdeverdan.github.io/Confused-Gamer/"
                >
                  Confused Gamer
                </a>
              </h4>
              <p class="card-text">
                An application designed to give users the abilty to find a new
                video game based on platform selection. Also allows user to save
                games to a favorite list so they can return to view the list at
                a later date.
              </p>
              <p>
                Technologies used: HTML5, CSS6, Javascript, JQuery, and Giant
                Bomb API.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100 project-box m-2 border border-dark">
            <img class="card-img-top" src={Weather} alt="" />
            <div class="card-body">
              <h4 class="card-title">
                <a
                  className="portfolio-title"
                  href="https://webdeverdan.github.io/Weather-Dashboard/"
                >
                  Weather Dashboard
                </a>
              </h4>
              <p class="card-text">
                A simple weather searching application that allows users to find
                the weather of a city. It provides current and 5 day weather
                forecasts, and UV Index.
              </p>
              <p>
                Technologies used:Technologies used: HTML5, CSS6, Javascript,
                JQuery, and OpenWeather API.{' '}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-4">
          <div class="card h-100 project-box m-2 border border-dark">
            <img class="card-img-top" src={Beer} alt="" />
            <div class="card-body">
              <h4 class="card-title">
                <a
                  className="portfolio-title"
                  href="https://frozen-inlet-56976.herokuapp.com/login"
                >
                  Mix 'n' Match
                </a>
              </h4>
              <p class="card-text">
                A dating/friendship web application that matches users based on
                beer preference. Features validation to enhance security and
                user experience. Future development includes more customizable
                matching functionality.
              </p>
              <p>
                Technologies used: HTML5, CSS6, Javascript, JQuery,
                Handlebars.js, Node.js, Express.js, Cloudinary, Multer, and MySQL.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100 project-box m-2 border border-dark">
            <img class="card-img-top" src={Planner} alt="" />
            <div class="card-body">
              <h4 class="card-title">
                <a className="portfolio-title" href="#">
                  Daily Planner
                </a>
              </h4>
              <p class="card-text">
                A simple day planning app that allows users to add and delete
                notes. The color scheme changes based on the time of the day to
                better visualize each hour
              </p>
              <p>Technologies used: HTML5, CSS6, & Javascript</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100 project-box m-2 border border-dark">
            <img class="card-img-top" src={Fitness} alt="" />
            <div class="card-body">
              <h4 class="card-title">
                <a
                  className="portfolio-title"
                  href="https://rocky-everglades-83809.herokuapp.com/?id=6169e181daaa4f00169ba7da"
                >
                  Fitness Tracker
                </a>
              </h4>
              <p class="card-text">
                A fitness plan tracker which allows the user to add a new
                workout, edit that workout, and afterwards see the aggregated
                statistics from the week.
              </p>
              <p>Technologies used: HTML5, CSS6, Javascript, MongoDB.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
