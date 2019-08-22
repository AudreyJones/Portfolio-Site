import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.js'
import AboutPage from './components/AboutPage.js'
import ProjectsPage from './components/ProjectsPage.js'
import ContactPage from './components/ContactPage.js'

import {Button, ButtonGroup, ButtonToolbar, Nav, Tab, ListGroup} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Tab.Container defaultActiveKey="#/home">
        <Row>
          <Col sm={3}>
          <Nav variant="pills" className="flex-column">
        <ListGroup size="lg">
          <ListGroup.Item variant="primary" href="#/home">Home</ListGroup.Item>
          <ListGroup.Item variant="primary"href="#/about">About</ListGroup.Item>
          <Link to="/projects"><ListGroup.Item>Projects</ListGroup.Item></Link>
          <Link to="/contact"><ListGroup.Item>Contact</ListGroup.Item></Link>
        </ListGroup>
        </Row>
        </Tab.Container>
        <Switch>  
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/aboutpage" component={AboutPage}/>
          <Route exact path="/projects" component={ProjectsPage}/>
          <Route exact path="/contact" component={ContactPage}/>
        </Switch>
       
      </div> 
      </Router>
    );
  }
}

export default App;
