import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage.js'
import AboutPage from './containers/AboutPage.js'
import ProjectsPage from './containers/ProjectsPage.js'
import ContactPage from './containers/ContactPage.js'
import { Nav, Tab, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class App extends Component {
  render() {
    return (
        <Router>
         <Tab.Container id="left-tabs" defaultActiveKey="home">
            <Row>
              <Col sm={2}>

              <Nav justify variant="pills" className="flex-column">
                <Nav.Item variant="primary">
                  <LinkContainer to="/home">
                    <Nav.Link eventKey="home" href="/home">Home</Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item variant="primary">
                  <LinkContainer to="/about">
                    <Nav.Link eventKey="about" href="/about">About</Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item variant="primary">
                  <LinkContainer to="/projects">
                    <Nav.Link eventKey="projects" href="/projects">Projects</Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item variant="primary">
                  <LinkContainer to="/contact">
                    <Nav.Link eventKey="contact" href="/contact">Contact</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
        
              </Col>
              <Col sm={9}>
              
                <Tab.Content>
                  <Tab.Pane eventKey="home"> 
                    <HomePage />
                  </Tab.Pane>

                  <Tab.Pane eventKey="about">
                    <AboutPage />
                  </Tab.Pane>

                  <Tab.Pane eventKey="projects">
                    <ProjectsPage />
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="contact">
                    {/* <ContactPage /> */}
                  </Tab.Pane>
                </Tab.Content>
                
              </Col>
            </Row>
          </Tab.Container> 
        </Router>
    );
  }
}

export default App;
