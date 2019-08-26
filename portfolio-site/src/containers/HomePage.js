import React, { Component } from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>Home Page</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" 
                        alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
                <Jumbotron>
                    <h1>Inquires about Contract Work?</h1>
                    <p>Click the Contact button to access my contact information. I am available by phone, email, Zoom, and Skype!</p>
                </Jumbotron>
            </div>

        )
    }

}

export default HomePage