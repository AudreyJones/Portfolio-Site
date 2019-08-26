import React, { Component } from 'react';
import { Card, CardDeck, Button, ButtonGroup } from 'react-bootstrap'
import Logo from '../logo192.png'


class ProjectsPage extends Component {
    render() {
        return(
            <div>
                <h1>Projects</h1>
                    <CardDeck>
                    <Card style={{ width: '18vw' }}>
                        <Card.Img variant="top" src={Logo} alt="Logo"/>
                        <Card.Body>
                            <Card.Title>Knitpickr</Card.Title>
                            <Card.Text>Keep track of all of your yarn craft projects and materials using this web app!</Card.Text>
                        </Card.Body>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary">Github</Button>
                                <Button variant="primary">Demo</Button>
                            </ButtonGroup>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card style={{ width: '18vw' }}>
                        <Card.Img variant="top" src={Logo} alt="Logo"/>
                        <Card.Body>
                            <Card.Title>AdventureApp</Card.Title>
                            <Card.Text>Go on an adventure starring you as a hero! Join villains on adventures for different popular Franchises, including Harry Potter, Star Wars, and the Marvel Cinematic Universe!</Card.Text>
                        </Card.Body>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary">Github</Button>
                                <Button variant="primary">Demo</Button>
                            </ButtonGroup>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card style={{ width: '18vw' }}>
                        <Card.Img variant="top" src={Logo} alt="Logo"/>
                        <Card.Body>
                            <Card.Title>CoffeeShop App</Card.Title>
                            <Card.Text>Create customized coffee orders containing multiple specialty coffee drinks. Update, favorite, and delete orders to customize your preferences!</Card.Text>
                        </Card.Body>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary">Github</Button>
                                <Button variant="primary">Demo</Button>
                            </ButtonGroup>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card style={{ width: '18vw' }}>
                        <Card.Img variant="top" src={Logo} alt="Logo"/>
                        <Card.Body>
                            <Card.Title>Top-Selling Nintendo Games CLI Gem</Card.Title>
                            <Card.Text>Get up-to-date information from Nintendo’s top-selling games site! Access popular titles and important information, including: number of players, game description to inform your next purchase. Happy Gaming!</Card.Text>
                        </Card.Body>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary">Github</Button>
                                <Button variant="primary">Demo</Button>
                            </ButtonGroup>
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