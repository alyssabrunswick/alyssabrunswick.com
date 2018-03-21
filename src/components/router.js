// PACKAGES
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// MY COMPONENTS
import Main from './main';
import Work from './Portfolio';
import Contact from './contact';
import Footer from './footer';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <li>Home</li>,
    main: () => <Main />
  },
  {
    path: '/Work',
    sidebar: () => <li>Work</li>,
    main: () => <Work />
  },
  {
    path: '/contact',
    sidebar: () => <li>Contact</li>,
    main: () => <Contact />
  }
];

const SiteRouter = () => (
  <Router history={browserHistory} onUpdate={hashLinkScroll}>
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
              component={route.main}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  </Router>
);

export default SiteRouter;
