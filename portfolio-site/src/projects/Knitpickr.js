import React, { Component } from "react";
import { Image, Breadcrumb, Container } from "react-bootstrap";
import KnitpickrPic from "../images/Knitpickr.png";

class Knitpickr extends Component {
  render() {
    console.log("Hello?");
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item active>Knitpickr</Breadcrumb.Item>
        </Breadcrumb>
        <Image src={KnitpickrPic} fluid></Image>
        <p>Hello?</p>
      </Container>
    );
  }
}

export default Knitpickr;
