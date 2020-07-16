import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Resume from "../images/Resume 2020 for Website.jpg";

class ResumePage extends Component {
  render() {
    return (
      <Container fluid>
        <Image src={Resume} alt="my resume" fluid rounded />
      </Container>
    );
  }
}

export default ResumePage;
