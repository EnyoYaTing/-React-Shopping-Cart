import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import Select from './Select';
import { DRINKS } from '../shared/drinks';
import { CUSTOM_CHOICE, INGREDIENT } from '../shared/customChoice';
import TestSelect from './TestSelect';
// import { TEST } from '../shared/test';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: DRINKS,
      customChoices: CUSTOM_CHOICE,
      ingredient: INGREDIENT,
      showSelection: false,
      selectedItem: {},
      selectedRadio: {
        title:'',
        option: ''
      }, 

      drinkQuantity: 0,
      cart: [],
      totalPrice: 0,
    }

    this.openSelection = this.openSelection.bind(this);
    this.closeSelection = this.closeSelection.bind(this);
    this.addDrinkItemToSelection = this.addDrinkItemToSelection.bind(this);

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.addDrinkQuantity = this.addDrinkQuantity.bind(this);
    this.deleteDrinkQuantity = this.deleteDrinkQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
 
  openSelection() {
    this.setState({
      showSelection: true,
    });
  }

  closeSelection(){
    this.setState({
      showSelection: false,
      drinkQuantity: 0
    });  
  }

  addDrinkItemToSelection(id) {
    let addeditem = this.state.drinks.find((item) => item.id === id)

    this.setState({
      selectedItem: addeditem
    })
  }
  
  // ---- 測試中 ----
  onRadioChange = (e) => {
    this.setState({
      selectedRadio : e.target.value
    });
  }
  // --- 測試中 ---

  handleCheckbox = (e) => {
    let ingredient = this.state.ingredient
    ingredient.forEach(item => {
       if (item.value === e.target.value)
          item.isChecked =  e.target.checked
    })
    this.setState({ingredient: ingredient})
  }
  
  handleSubmit(event) {
    let check = this.state.ingredient.map(list => {
      return(
        (list.isChecked) ? `${list.value} ` : '' 
      );
    })
    alert('A name was submitted: ' + " " + check);
    event.preventDefault();
  }
  
  // handle Drink Quantity
  addDrinkQuantity() {
    let total = this.state.drinkQuantity+1; 
    this.setState({
      drinkQuantity: total   
    })
  }

  deleteDrinkQuantity() {
    let total;
    if (this.state.drinkQuantity === 0) {
      total = 0;
    } else {
      total = this.state.drinkQuantity-1;
    }

    this.setState({
      drinkQuantity: total   
    })
  }

  // handle item in cart
  addToCart(id, item, num, price, ice, sugar, ingredient) {
    let obj = {id, item, num, price, ice, sugar, ingredient};
    this.state.cart.push(obj);

    let total = this.state.totalPrice + price;

    this.setState({
      totalPrice: total
    });
  }


  render() {
    return (
      <div>
        <div className="main-container">
          <Products drinks={this.state.drinks} openSelection={this.openSelection} addDrinkItemToSelection={this.addDrinkItemToSelection}/>
          <ShoppingCart cart={this.state.cart} totalPrice={this.state.totalPrice}
          />
        </div>  
        <Select 
          showSelection={this.state.showSelection} closeSelection={this.closeSelection} 
          selectedItem={this.state.selectedItem} choices={this.state.customChoices}
          ingredient={this.state.ingredient}   handleCheckbox={this.handleCheckbox}
          
          selectedRadio={this.state.selectedRadio } 
          onRadioChange={this.onRadioChange} handleSubmit={this.handleSubmit}
          addDrinkQuantity={this.addDrinkQuantity} drinkQuantity={this.state.drinkQuantity}
          deleteDrinkQuantity={this.deleteDrinkQuantity}
          singleDrinkTotalPrice={this.state.singleDrinkTotalPrice}
          addToCart={this.addToCart}   
        />
        {/* <TestSelect
          showSelection={this.state.showSelection} closeSelection={this.closeSelection} 
          selectedItem={this.state.selectedItem} choices={this.state.customChoices}
          ingredient={this.state.ingredient}  
          selectedRadio={this.state.selectedRadio }  handleCheckbox={this.handleCheckbox}

          onRadioChange={this.onRadioChange} handleSubmit={this.handleSubmit}
          addDrinkQuantity={this.addDrinkQuantity} drinkQuantity={this.state.drinkQuantity}
          deleteDrinkQuantity={this.deleteDrinkQuantity}
          singleDrinkTotalPrice={this.state.singleDrinkTotalPrice}
          addToCart={this.addToCart}   
        /> */}
        
      </div>
    );
  }
}

export default Main;