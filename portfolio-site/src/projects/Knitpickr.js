import React, { Component } from "react";
import {
  Tab,
  Col,
  Card,
  CardDeck,
  Button,
  ButtonGroup,
  Breadcrumb,
  Container,
} from "react-bootstrap";
import Logo from "../images/logo192.png";
import AdventureApp from "../images/AdventureApp.png";

class Knitpickr extends Component {
  render() {
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="portfolio-site/src/projects">
            Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item href="portfolio-site/src/projects/Knitpickr.js">
            Knitpickr
          </Breadcrumb.Item>
        </Breadcrumb>
        <Col sm={9}>
          <Tab.Content id="margin-box">
            <Tab.Pane eventKey="knitpickr">
              <Knitpickr />
            </Tab.Pane>

            {/* <Tab.Pane eventKey="about">
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
            {/* </Tab.Pane> */}
          </Tab.Content>
        </Col>
      </Container>
    );
  }
}

export default Knitpickr;
