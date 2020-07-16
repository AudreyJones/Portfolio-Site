import React, { Component } from "react";
import { Image, Breadcrumb, Container, Button, Row } from "react-bootstrap";
import CoffeeShopAppPic from "../images/CoffeeShop.jpg";

class CoffeeShopApp extends Component {
  render() {
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="../containers/HomePage.js">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>CoffeeShopApp</Breadcrumb.Item>
        </Breadcrumb>
        <Image src={CoffeeShopAppPic} fluid></Image>
        <Row>
          <Button
            href="https://github.com/AudreyJones/CoffeeShop.git"
            size="lg"
            class="project-link"
          >
            Github
          </Button>{" "}
          <Button
            href="https://drive.google.com/file/d/1tNpKa5NaT7ZWhRPoYpiRcfcMqQux8AfD/view?usp=sharing"
            size="lg"
          >
            Demo
          </Button>{" "}
        </Row>
        <p>
          A Rails web app that enables users to create customized coffee orders
          containing multiple specialty coffee drinks. Users can update,
          favorite, and delete orders to customize their preferences.{" "}
        </p>
      </Container>
    );
  }
}

export default CoffeeShopApp;
