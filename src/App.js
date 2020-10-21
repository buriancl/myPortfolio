import React from "react";

// components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
// pages
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";

import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

// Stylesheet
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      {/* Header and Nav */}
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      {/* About me section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=" "
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      {/* Tech Skills */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default App;
