import React, { Component } from 'react';
// import base from '../base';
import 'normalize.css';
import './styles/app.css';
import projects from './portfolio-data';

// MY COMPONENTS
import SiteRouter from './components/router';

class App extends Component {
  state = {
    projects: {}
  };

  loadProjects() {
    this.setState({ projects });
  }
  render() {
    return <SiteRouter projects={this.state.projects} />;
  }
}

export default App;
