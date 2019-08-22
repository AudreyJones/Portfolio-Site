import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap'


class ProjectsPage extends Component {
    render() {
        return(
            <div>
                <h1>Projects Page</h1>
                    <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" alt="Logo"/>
                        <Card.Body>
                            <Card.Title>Knitpickr</Card.Title>
                            <Card.Text>Keep track of all of your yarn craft projects and materials using this web app!

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" alt="Logo"/>
                        <Card.Body>
                            <Card.Title>AdventureApp</Card.Title>
                            <Card.Text>Example Body</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" alt="Logo"/>
                        <Card.Body>
                            <Card.Title>CoffeeShop App</Card.Title>
                            <Card.Text>Example Body</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
            </div>

        )
    }

}

export default ProjectsPage