import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Nav,
  Jumbotron,
  Card,
  CardGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Logo from "../images/logo192.png";
import Knitpickr from "../images/Knitpickr.png";
import AdventureApp from "../images/AdventureApp.png";
import CoffeeShop from "../images/CoffeeShop.jpg";
import NintendoSite from "../images/Nintendo Top-Selling Games.png";

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
            <Col sm={2} md={4}>
              <Card className="project">
                <Card.Img src={Knitpickr} alt="Card image" />
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
            <Col sm={2} md={4}>
              <Card className="project">
                <Card.Img src={AdventureApp} alt="Card image" />
                <Card.ImgOverlay>
                  <LinkContainer to="/projects/adventureApp">
                    <Nav.Link
                      eventKey="adventure"
                      href="portfolio-site/src/projects/AdventureApp.js"
                    >
                      <Card.Title>AdventureApp</Card.Title>
                    </Nav.Link>
                  </LinkContainer>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={2} md={4}>
              <Card className="project">
                <Card.Img src={CoffeeShop} alt="Card image" />
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
                <Card.Img src={NintendoSite} alt="Card image" />
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
      </Container>
    );
  }
}

export default HomePage;
