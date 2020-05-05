import React, { Component } from 'react';
import MainProduct  from './MainProduct ';

class Home extends Component {
  render() {
    return (
      <div className="homepage row">
          <MainProduct />
      </div>  
    );
  }
}

export default Home;