import React, { Component } from 'react';
import ComponentOne from './components/component-one';
import ComponentTwo from './components/component-two';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is a template create for react</h1>
        <ComponentOne />
        <hr></hr>
        <ComponentTwo />
        <hr></hr>
      </div>
    );
  }
}

export default App;
