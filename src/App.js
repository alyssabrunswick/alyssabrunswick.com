import React, { Component } from 'react';
import 'normalize.css';
import './styles/app.css';

// MY COMPONENTS
import SiteRouter from './components/router';

class App extends Component {
  render() {
    return <SiteRouter />;
  }
}

export default App;
