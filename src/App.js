import React, { Component } from 'react';
import './App.css';
import App_header from './Component/App-header';
import App_body from './Component/App-body';
class App extends Component {
  render() {
    return (
      <div>
      <App_header />
      {this.props.children}
      </div>
    );
  }
}

export default App;
