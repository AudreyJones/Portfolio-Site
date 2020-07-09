import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage.js";
import About from "./containers/About.js";
import ProjectsPage from "./containers/ProjectsPage.js";
import ContactPage from "./containers/ContactPage.js";
import ResumePage from "./containers/ResumePage.js";
import Knitpickr from "./projects/Knitpickr";
import { Nav, Tab, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Navbar */}
        <Tab.Container id="left-tabs" defaultActiveKey="home">
          <Row>
            <Col sm={2}>
              <div id="logo">
                <p>Audrey Jones</p>
              </div>
              <Nav justify variant="pills" className="flex-column">
                <Nav.Item variant="primary">
                  <LinkContainer to="/home">
                    <Nav.Link eventKey="home" href="/home">
                      Home
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item variant="primary">
                  <LinkContainer to="/about">
                    <Nav.Link eventKey="about" href="/about">
                      About
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item variant="primary">
                  <LinkContainer to="/resume">
                    <Nav.Link eventKey="resume" href="/resume">
                      Resume
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item variant="primary">
                  <LinkContainer to="/contact">
                    <Nav.Link eventKey="contact" href="/contact">
                      Contact
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Main Section: */}

            <Col sm={9}>
              <Tab.Content id="margin-box">
                <Tab.Pane eventKey="home">
                  <HomePage />
                </Tab.Pane>

                {/* <Tab.Pane eventKey="knitpickr">
                  <Knitpickr />
                </Tab.Pane> */}

                <Tab.Pane eventKey="about">
                  <About />
                </Tab.Pane>

                <Tab.Pane eventKey="projects">
                  <ProjectsPage />
                </Tab.Pane>

                <Tab.Pane eventKey="resume">
                  <ResumePage />
                </Tab.Pane>

                <Tab.Pane eventKey="contact">
                  <ContactPage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Container id="footer" fluid>
          Audrey Jones &#169; 2020 | Made with Lo&hearts;e &{" "}
          <FontAwesomeIcon icon="coffee" /> |{" "}
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="md" />{" "}
          <FontAwesomeIcon icon={["fab", "github"]} size="md" />{" "}
          <FontAwesomeIcon icon={["fab", "medium"]} size="md" />
        </Container>
      </Router>
    );
  }
}

export default App;
