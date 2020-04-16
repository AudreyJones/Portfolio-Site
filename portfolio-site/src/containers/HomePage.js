import React, { Component } from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>Home Page</h1>
                <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="portfolio-site/src/images/AdventureApp.png"
                        alt="Adventure App"
                        />
                        <Carousel.Caption>
                        <h3>Adventure App label</h3>
                        <p>This is the AdventureApp</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <Jumbotron>
                    <h1>Inquiries about Contract Work?</h1>
                    <p>Click the Contact button to access my contact information. I am available by phone, email, Zoom, and Skype!</p>
                </Jumbotron>
            </div>

        )
    }

}

export default HomePage