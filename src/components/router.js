// PACKAGES
import React from 'react';
import { Switch, Route } from 'react-router';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// MY COMPONENTS
import Main from './main';
import Work from './portfolio';
import Project from './project';
import Contact from './contact';
import Footer from './footer';
import NoMatch from './404';
import projects from '../projects-data';

const SiteRouter = () => (
  // <Router>
  //   <div>
  //     <Route path="/work/:id" component={Project} />
  //   </div>
  // </Router>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/work" component={Work} />
    <Route path="/work/:user" component={Project} />
    <Route path="/contact" component={Contact} />
    <Route component={NoMatch} />
  </Switch>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default SiteRouter;
