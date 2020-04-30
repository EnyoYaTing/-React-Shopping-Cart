import React, { Component } from 'react';
import Main from './Main';


class Home extends Component {
  render() {
    return (
      <div className="homepage row">
        <div className="col-7">
          <Main />
        </div> 
      </div>  
    );
  }
}

export default Home;