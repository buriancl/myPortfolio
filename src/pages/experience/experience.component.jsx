import React from "react";
import { Card, Container, Jumbotron } from "react-bootstrap";
import TTS from "../../assets/img/experience/TTS.webp";
import Tilt from "react-tilt";

import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">
        TRAINING/EDUCATION
      </h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={TTS}
                  alt="Accenture logo"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Junior Web Developer
                  </Card.Title>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Development
                    </strong>
                    <br />
                    <strong>Technology:</strong> Ruby on Rails
                    <br />
                    <strong>Duration:</strong> Sep 2019 - Dec 2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Gained experience</strong> in fundamental web
                        devolpement skills used to design and create a modern
                        web application.
                      </li>
                      <li>
                        <strong>Developed &amp; Deployed</strong> a rails
                        application while working in a team environment to
                        accomplish our goals.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card.Header>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
