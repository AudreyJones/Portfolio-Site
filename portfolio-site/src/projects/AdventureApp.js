import React, { Component } from "react";
import { Image, Breadcrumb, Container } from "react-bootstrap";
import AdventureAppPic from "../images/AdventureApp.png";

class AdventureApp extends Component {
  render() {
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="../containers/HomePage.js">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>AdventureApp</Breadcrumb.Item>
        </Breadcrumb>
        <Image src={AdventureAppPic} fluid></Image>
        <p>Go on an adventure starring you as the hero!</p>
      </Container>
    );
  }
}

export default AdventureApp;
