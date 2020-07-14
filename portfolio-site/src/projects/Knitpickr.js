import React, { Component } from "react";
import { Image, Breadcrumb, Container } from "react-bootstrap";
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
        <p>
          Keep track of your crochet and knitting supplies stash with Knitpickr!
          Store the necessary supplies (yarn, hooks, etc.) information with each
          project. Add new supplies with the click of a button. A full-stack
          application made with a Ruby on Rails API consumed by a React/Redux
          front-end.
        </p>
      </Container>
    );
  }
}

export default Knitpickr;
