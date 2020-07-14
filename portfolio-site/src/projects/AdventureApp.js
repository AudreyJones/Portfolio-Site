import React, { Component } from "react";
import { Image, Breadcrumb, Container } from "react-bootstrap";
import AdventureApp from "../images/AdventureApp.png";

class AdventureApp extends Component {
  render() {
    console.log("Hello?");
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item active>AdventureApp</Breadcrumb.Item>
        </Breadcrumb>
        <Image src={AdventureApp} fluid></Image>
        <p>Adventure App Description</p>
      </Container>
    );
  }
}

export default AdventureApp;
