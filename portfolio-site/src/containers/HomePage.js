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
import KnitpickrPic from "../images/Knitpickr.png";
import AdventureAppPic from "../images/AdventureApp.png";
import CoffeeShopPic from "../images/CoffeeShop.jpg";
import NintendoSitePic from "../images/Nintendo Top-Selling Games.png";

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
                <Card.Img src={KnitpickrPic} alt="Card image" />
                <Card.ImgOverlay>
                  <LinkContainer to="/projects/knitpickr">
                    <Nav.Link
                      eventKey="knitpickr"
                      href="../projects/Knitpickr.js"
                    >
                      <Card.Title>Knitpickr</Card.Title>
                    </Nav.Link>
                  </LinkContainer>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={2} md={4}>
              <Card className="project">
                <Card.Img src={AdventureAppPic} alt="Card image" />
                <Card.ImgOverlay>
                  <LinkContainer to="/projects/adventureApp">
                    <Nav.Link
                      eventKey="adventure"
                      href="../projects/AdventureApp.js"
                    >
                      <Card.Title>AdventureApp</Card.Title>
                    </Nav.Link>
                  </LinkContainer>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={2} md={4}>
              <Card className="project">
                <Card.Img src={CoffeeShopPic} alt="Card image" />
                <Card.ImgOverlay>
                  <LinkContainer to="/projects/coffeeshopapp">
                    <Nav.Link
                      eventKey="coffeeshop"
                      href="../projects/CoffeeShopApp.js"
                    >
                      <Card.Title>CoffeeShop App</Card.Title>
                    </Nav.Link>
                  </LinkContainer>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row> </Row>
          <Row>
            <Col>
              <Card className="project">
                <Card.Img src={NintendoSitePic} alt="Card image" />
                <Card.ImgOverlay>
                  <LinkContainer to="/projects/nintendocligem">
                    <Nav.Link
                      eventKey="nintendo"
                      href="../projects/Nintendo CLI Gem.js"
                    >
                      <Card.Title>
                        Top-Selling Nintendo Games CLI Gem
                      </Card.Title>
                    </Nav.Link>
                  </LinkContainer>
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
