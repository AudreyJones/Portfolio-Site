import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage.js";
import About from "./containers/About.js";
import ProjectsPage from "./containers/ProjectsPage.js";
import Contact from "./containers/Contact.js";
import { Nav, Tab, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <Tab.Container id="left-tabs" defaultActiveKey="home">
          <Row>
            <Col sm={2}>
              <p class="logo">Audrey Jones</p>
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

                {/* <Nav.Item variant="primary">
                  <LinkContainer to="/projects">
                    <Nav.Link eventKey="projects" href="/projects">
                      Projects
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item> */}

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

                <Tab.Pane eventKey="about">
                  <About />
                </Tab.Pane>

                <Tab.Pane eventKey="projects">
                  <ProjectsPage />
                </Tab.Pane>

                {/* <Tab.Pane eventKey="contact">
                        <Contact />
                      </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Router>
    );
  }
}

export default App;
