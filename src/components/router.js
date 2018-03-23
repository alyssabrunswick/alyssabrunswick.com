// PACKAGES
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// MY COMPONENTS
import Main from './main';
import Work from './portfolio';
import Contact from './contact';
import Footer from './footer';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/Work',
    component: Work
  },
  {
    path: '/contact',
    component: Contact
  }
];

const SiteRouter = () => (
  <Router>
    <div className="page">
      <header className="full">
        <div className="logo">ab</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Work">Work</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
              projects={this.state.projects}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  </Router>
);

export default SiteRouter;
