import React, { Component } from "react";
import { Image, Breadcrumb, Container } from "react-bootstrap";
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
        <p>Go on an adventure starring you as the hero!</p>
      </Container>
    );
  }
}

export default CoffeeShopApp;
