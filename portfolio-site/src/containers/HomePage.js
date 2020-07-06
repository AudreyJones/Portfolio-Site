import React, { Component } from "react";
import {
  Jumbotron,
  Card,
  CardGroup,
  Button,
  ButtonGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Logo from "../logo192.png";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hi, I'm Audrey Jones!</h1>
          <p>Scroll down to see my work</p>
        </Jumbotron>
        {/* <Card style={{ width: "20vw" }}>
          <Card.Img variant="top" src={Logo} alt="Logo" />
          <Card.Body>
            <Card.Title>Knitpickr</Card.Title>
            <Card.Text>
              Keep track of all of your yarn craft projects and materials using
              this web app!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        {/* </Card.Footer> */}
        {/* </Card> */}
        <Container fluid>
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
                    <Card.Title>Project</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col sm>
                <Card className="project">
                  <Card.Img src={Logo} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Project</Card.Title>
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
                    <Card.Title>Project</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="project">
                  <Card.Img src={Logo} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Project</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="project">
                  <Card.Img src={Logo} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Project</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Container>
      </div>
    );
  }
}

export default HomePage;
