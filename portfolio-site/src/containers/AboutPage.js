import React, { Component } from 'react';
// import Logo from '../logo192.png'
import { Figure } from 'react-bootstrap';
import Profile from '../images/Profile.jpg';

class AboutPage extends Component {
    render() {
        return(
            <div>
                <h1>About Audrey</h1>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        className="profile"
                        src={Profile}
                    />
                </Figure>
                <Figure.Caption>As a neuroscience graduate walking the line between art and science, I have always had an interest in human-machine interactions, so I decided to pursue a full-stack developer role through the program at Flatiron School. The skills I’ve acquired  include: Ruby, Rails, JavaScript, React, Redux, HTML/CSS, and GIt/Github, PostgreSQL. My goal is to build applications that improve, inspire, and integrate with living in the 21st century.</Figure.Caption>
            </div>

        )
    }

}

export default AboutPage