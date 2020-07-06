import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Ocean from "../images/ocean.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContactPage extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Contact Me</h1>
        <Row>
          <Col>
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
          </Col>
          <Col>
            <FontAwesomeIcon icon="envelope" size="2x" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactPage;
