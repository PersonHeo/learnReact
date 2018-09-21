import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import { Home } from '../pages';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router exact path="/" component={Home}></Router>
      </div>
    );
  }
}

export default hot(module)(App);
