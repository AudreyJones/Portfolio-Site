import React, { Component } from "react";
import { Image, Breadcrumb, Container, Button } from "react-bootstrap";
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
        <Button href="https://github.com/AudreyJones/AdventureApp.git">
          Github
        </Button>{" "}
        <Button href="https://drive.google.com/file/d/13gx3bBUHfwG9fdbiFKC6D6xIVqTMNPia/view?usp=sharing">
          Demo
        </Button>{" "}
        <p>
          This Rails web app allows users to go on an adventure, starring as the
          hero. Create, edit, update, and delete adventures featuring villains
          from popular franchises and organizations, including Harry Potter,
          Star Wars, and the Marvel Cinematic Universe. Search for a particular
          villain or franchise by name to access information more quickly.
        </p>
      </Container>
    );
  }
}

export default AdventureApp;
