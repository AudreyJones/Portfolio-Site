import React, { Component } from "react";
import { Image, Breadcrumb, Container, Button, Row } from "react-bootstrap";
import KnitpickrPic from "../images/Knitpickr.png";

class Knitpickr extends Component {
  render() {
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="../containers/HomePage.js">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Knitpickr</Breadcrumb.Item>
        </Breadcrumb>
        <Image src={KnitpickrPic} fluid></Image>
        <Row>
          <Button
            href="https://github.com/AudreyJones/Knitpickr.git"
            size="lg"
            class="project-link"
          >
            Github
          </Button>{" "}
          <Button
            href="https://drive.google.com/file/d/1DPII7fs34gvMAXPCAtmpvkhdsUny02DY/view?usp=sharing"
            size="lg"
            class="project-link"
          >
            Demo
          </Button>
        </Row>{" "}
        <p>
          This web application uses a Ruby on Rails API backend, PostGreSQL
          database, and a JavaScript-based React/Redux user interface to track
          projects and materials needed for a user’s yarn crafts projects
          (knitting, crochet, and macrame).
        </p>
      </Container>
    );
  }
}

export default Knitpickr;
