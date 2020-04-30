import React, { Component } from 'react';
import Products from './Products';
import Selection from './Selection';
import { DRINKS } from '../shared/drinks'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: DRINKS,
      showSelection: false
    }

    this.openSelection = this.openSelection.bind(this);
    this.closeSelection = this.closeSelection.bind(this);
  }

  openSelection() {
    this.setState({
      showSelection: true
    });
  }

  closeSelection(){
    this.setState({
      showSelection: false
    }); 
  }

  
  render() {
    return (
      <div className="row">
        <Products drinks={this.state.drinks} openSelection={this.openSelection} />
        <Selection showSelection={this.state.showSelection} closeSelection={this.closeSelection} />
      </div>  
    );
  }
}

export default Main;