import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Profile from "../../assets/img/profile/profile.webp";

import "./about.style.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              {/* description */}
              <Row className="align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Chris Burian</strong>
                <br />I am a Full Stack Web Developer with React.js, Redux,
                Express.js, Node.js, and MongoDB as my stack.
                <br />
                In 2019, I began my journey into web devolopment at Tech Talent
                South. I began with Ruby and Rails, but soon switched to
                ReactJS.
                <br />
                My goal is to provide an amazing experience with the best level
                of quality and service to them.
                <br />
                I love learning about new technologies, what problems are they
                solving and how I may use them to build better and scalable
                products.
                <br /> <br />
                {/* buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="#resume">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="#github">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="#linkedin">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
