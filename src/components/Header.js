import React, { Component } from 'react';
// import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
