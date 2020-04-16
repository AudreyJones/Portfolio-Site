import React, { Component } from 'react';
import { Media, Image } from 'react-bootstrap';
import Profile from '../images/Profile.jpg';

class AboutPage extends Component {
    render() {
        return(
            <div>
                    <Media>
                            <Image
                                    height="200"
                                    width="200"
                                    alt="200x200"
                                    className="profile"
                                    src={Profile}
                                    rounded thumbnail
                            />
                    <Media.Body>
                    <h1>About Me</h1>
                    <p>I took a roundabout path towards software development, discovering it in my freshman year of college, but pursuing an undergraduate degree in Neuroscience, thinking I would apply to medical school after undergrad. Through two undergrad research positions, I realized that medicine was not the field I was looking for. After graduating, I took a step back and remembered how challenging and interesting I had found coding as a freshman. So, I sought out Meetup groups based around women in code and stumbled upon the group, Girl Develop It (GDI) in late 2016. In 2017, I started attending GDI events, panels, and classes in HTML, CSS, JS, and UX/UI research. There, I learned of coding bootcamps, did my research, applied, and got into the Flatiron School's online fullstack engineering program. In my free time I weave (crochet and chain maille), drink way too much cold brew, watch true crime shows, and do aqua fit.</p>
                    </Media.Body>
                </Media>
            </div>

        )
    }

}

export default AboutPage