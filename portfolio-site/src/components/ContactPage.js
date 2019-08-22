import React, { Component } from 'react';
import { Button, ListGroup, Jumbotron } from 'react-bootstrap'

class ContactPage extends Component {
    render() {
        return(
            <div>
                <h1>Contact Me</h1>
                <Jumbotron>
                    <h1></h1>
                    <ListGroup>
                        <ListGroup.Item>Github</ListGroup.Item>
                        <ListGroup.Item>LinkedIn</ListGroup.Item>
                        <ListGroup.Item>Medium</ListGroup.Item>

                    </ListGroup>
                </Jumbotron>

            </div>

        )
    }

}

export default ContactPage