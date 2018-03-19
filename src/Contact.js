import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// import logo from '../logo.svg';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Header />
        <h1>CONTACT</h1>
        <Footer />
    </div>
    );
  }
}

export default Contact;
