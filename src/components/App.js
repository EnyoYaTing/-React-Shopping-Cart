import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Header /> */}
        <Home />
      </div>  
    );
  }
}

export default App;