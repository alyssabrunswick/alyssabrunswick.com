import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Header />
        <h1>PORTFOLIO</h1>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
