import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Resume from "../images/2020_Resume.jpg";

class ResumePage extends Component {
  render() {
    return (
      <Container fluid>
        <Image src={Resume} alt="my resume" fluid />
      </Container>
    );
  }
}

export default ResumePage;
