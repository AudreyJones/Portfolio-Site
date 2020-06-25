import React, { Component } from "react";
import { Jumbotron, Card, CardGroup, Row, Col } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hi, I'm Audrey Jones!</h1>
          <p>Scroll down to see my work</p>
        </Jumbotron>
        <CardGroup>
          <Row>
            <Col sm>
              <Card className="projects">
                <Card.Img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Knitpickr</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm>
              <Card className="projects">
                <Card.Img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Project</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm>
              <Card className="projects">
                <Card.Img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Project</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Card className="projects">
            <Card.Img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Project</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="projects">
            <Card.Img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Project</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="projects">
            <Card.Img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Project</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default HomePage;
