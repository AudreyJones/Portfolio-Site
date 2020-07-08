import React, { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContactPage extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Contact Me</h1>
        <Row>
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
        </Row>
      </Container>
    );
  }
}

export default ContactPage;
