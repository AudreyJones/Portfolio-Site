import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage.js'
import ProjectsPage from './components/ProjectsPage.js'
import ContactPage from './components/ContactPage.js'

import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ButtonGroup size="lg">
        <Link to="/aboutpage"><Button variant="primary">About</Button></Link>
        <Link to="/projects"><Button>Projects</Button></Link>
        <Link to="/contact"><Button>Contact</Button></Link>
        </ButtonGroup>
        <Switch>  
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
