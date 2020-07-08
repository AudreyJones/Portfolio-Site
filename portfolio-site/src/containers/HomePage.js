import React, { Component } from "react";
import {
  Jumbotron,
  Card,
  CardGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Logo from "../images/logo192.png";

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
                  <Card.Title>Knitpickr</Card.Title>
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
      </Container>
    );
  }
}

export default HomePage;
