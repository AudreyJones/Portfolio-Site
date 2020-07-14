import React, { Component } from "react";
import { Image, Breadcrumb, Container } from "react-bootstrap";
import NintendoGemPic from "../images/Nintendo Top-Selling Games.png";

class NintendoCLIGem extends Component {
  render() {
    return (
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="../containers/HomePage.js">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="../containers/ProjectPage.js">
            Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>NintendoGem</Breadcrumb.Item>
        </Breadcrumb>
        <Image src={NintendoGemPic} fluid></Image>
        <p>
          A Command Line Interface (CLI) Gem that scrapes Nintendo's site for
          their top-selling games and enables the user to see look through which
          games are available, and various information about each game,
          including: games' ratings, the number of players, and game genre.
        </p>
      </Container>
    );
  }
}

export default NintendoCLIGem;
