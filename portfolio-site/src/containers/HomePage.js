import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Nav,
  Tab,
  Jumbotron,
  Card,
  CardGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Logo from "../images/logo192.png";
import Knitpickr from "../projects/Knitpickr";

class HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Hi, I'm Audrey!</h1>
          <p>Scroll down to see my work</p>
        </Jumbotron>

        <CardGroup>
          <Row>
            <Col sm>
              <Card className="project">
                <Card.Img src={Logo} alt="Card image" />
                <Card.ImgOverlay>
                  <LinkContainer to="/projects/knitpickr">
                    <Nav.Link
                      eventKey="knitpickr"
                      href="portfolio-site/src/projects/Knitpickr.js"
                    >
                      <Card.Title>Knitpickr</Card.Title>
                    </Nav.Link>
                  </LinkContainer>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm>
              <Card className="project">
                <Card.Img src={Logo} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>AdventureApp</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm>
              <Card className="project">
                <Card.Img src={Logo} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>CoffeeShop App</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row> </Row>
          <Row>
            <Col>
              <Card className="project">
                <Card.Img src={Logo} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Top-Selling Nintendo Games CLI Gem</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="project">
                <Card.Img src={Logo} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Project A</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="project">
                <Card.Img src={Logo} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Project B</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </CardGroup>

        {/* Main Section: */}

        {/* <Col sm={9}>
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
            </Tab.Pane> */}
        {/* </Tab.Content> */}
        {/* </Col> */}
      </Container>
    );
  }
}

export default HomePage;
