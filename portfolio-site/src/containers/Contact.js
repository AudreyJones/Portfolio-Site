import React, { Component } from "react";
import {
  Button,
  ListGroup,
  Jumbotron,
  Nav,
  Tab,
  Col,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Contact extends Component {
  render() {
    return (
      <React.Fragment class="margin-box">
        <h1>Contact Me</h1>
        <Jumbotron>
          <h1>Thing</h1>
          <Tab.Container>
            <Row>
              <Col sm={2}>
                <Nav justify variant="pills" className="flex-column">
                  <Nav.Item variant="primary">
                    <LinkContainer to="/home"></LinkContainer>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane>
                    <h2>Git</h2>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Contact;
