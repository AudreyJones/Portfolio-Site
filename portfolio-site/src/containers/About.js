import React, { Component } from "react";
import { Media, Image, Container } from "react-bootstrap";
import Profile from "../images/Audrey.jpg";

class About extends Component {
  render() {
    return (
      <Container fluid>
        <Media>
          <Image
            height="200"
            width="200"
            alt="200x200"
            className="profile"
            src={Profile}
            rounded
            thumbnail
          />
          <Media.Body>
            <h1>About Me</h1>
            <p>
              I took a non-linear path into the field of software development,
              discovering coding in a course my freshman year of college, where
              we used Maple14 to create simple physics simulations. However, my
              initial intentions entering college was to apply to medical school
              after undergrad, so I pursued a degree in Neuroscience. I
              completed two lab research positions as an undergrad while also
              indulging my budding interests in technology: taking a
              graduate-level course in Systems Engineering my senior year and
              writing one of my final papers on Human-Machine interactions.
              However, through my two undergrad research positions, I realized
              that medicine was not the field for me.
            </p>
            <p>
              After graduating, I took a step back and remembered how
              challenging and interesting I had found coding as a freshman. So,
              I started using free and less-expensive online resources:
              Codecademy and Team Treehouse to self-learn some of the basics:
              HTML/CSS, Bootstrap, JavaScript, and the general basics of coding.
              I eventually started to attend Meetup group events near me based
              around women in code and stumbled upon the group, Girl Develop It
              (GDI) in late 2016. In 2017, I started attending GDI events,
              panels, and classes in HTML, CSS, JS, and UX/UI research. There, I
              met other students who raved about their experiences with coding
              bootcamps. After comparing a few in the greater Philadelphia, I
              applied, and got into the Flatiron School's online fullstack
              engineering program. Now, I use my background in Neuroscience
            </p>
            <p>
              In my free time I: make art (digital and physical), weave (crochet
              and scale/chain maille), drink way too much cold brew coffee,
              watch true crime shows, and do aqua fit!
            </p>
          </Media.Body>
        </Media>
      </Container>
    );
  }
}

export default About;
