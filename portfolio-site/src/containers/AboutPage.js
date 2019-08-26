import React, { Component } from 'react';
import Logo from '../logo192.png'

class AboutPage extends Component {
    render() {
        return(
            <div>
                <h1>About Page</h1>
                <img
                    className="profile"
                    src={Logo}
                />
                <p>As a neuroscience graduate trying to walk the line between art and science, I have always had an interest in human-machine interactions, so I decided to pursue a full-stack developer role through the program at Flatiron School. The skills I’ve acquired  include: Ruby, Rails, JavaScript, React, Redux, HTML/CSS, and GIt/Github, PostgreSQL. My goal is to build applications that improve, inspire, and integrate with living in the 21st century.</p>
            </div>

        )
    }

}

export default AboutPage