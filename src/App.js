import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <h1>Alyssa Brunswick</h1>
        <Footer />
      </section>
    );
  }
}

export default App;
