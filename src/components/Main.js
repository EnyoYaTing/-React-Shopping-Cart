import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import Select from './Select';
import { DRINKS } from '../shared/drinks';
import { ICE, SUGAR, INGREDIENT } from '../shared/customChoice';
import TestSelect from './TestSelect';
// import { TEST } from '../shared/test';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: DRINKS,
      ice: ICE,
      sugar: SUGAR,
      ingredient: INGREDIENT,
      showSelection: false,
      selectedItem: {},
      slecIce: '',
      slecSugar: '',

      drinkQuantity: 0,
      cart: [],
      totalPrice: 0,
    }

  
    this.addToCart = this.addToCart.bind(this);
  }
 
  openSelection = () => {
    this.setState({
      showSelection: true,
    });
  }

  closeSelection = () => {
    this.setState({
      showSelection: false,
      drinkQuantity: 0
    });  
  }

  addDrinkItemToSelection = (id) => {
    let addeditem = this.state.drinks.find((item) => item.id === id)

    this.setState({
      selectedItem: addeditem
    })
  }
  
  // ---- 測試中 ----
  onIceRadioChange = (e) => {
    this.setState({
      slecIce: e.target.value
    });
  }

  onSugarRadioChange = (e) => {
    this.setState({
      slecSugar : e.target.value
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
  
  handleSubmit = (event) => {
    let check = this.state.ingredient.map(list => {
      return(
        (list.isChecked) ? `${list.value} ` : '' 
      );
    })

    let ice = this.state.slecIce;
    let sugar = this.state.slecSugar;
    alert('A name was submitted: ' + " " + ice + " " + sugar + " " + check);
    event.preventDefault();
  }
  
  // handle Drink Quantity
  addDrinkQuantity = () => {
    let total = this.state.drinkQuantity+1; 
    this.setState({
      drinkQuantity: total   
    })
  }

  deleteDrinkQuantity = () => {
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
          selectedItem={this.state.selectedItem} ice={this.state.ice}
          sugar={this.state.sugar}  ingredient={this.state.ingredient}  
          slecIce={this.state.slecIce} slecSugar={this.state.slecSugar} 
          onSugarRadioChange={this.onSugarRadioChange} handleCheckbox={this.handleCheckbox}
          onIceRadioChange={this.onIceRadioChange}

          handleSubmit={this.handleSubmit}
          addDrinkQuantity={this.addDrinkQuantity} drinkQuantity={this.state.drinkQuantity}
          deleteDrinkQuantity={this.deleteDrinkQuantity}
          singleDrinkTotalPrice={this.state.singleDrinkTotalPrice}
          addToCart={this.addToCart}   
        />
        {/* <TestSelect
          showSelection={this.state.showSelection} closeSelection={this.closeSelection} 
          selectedItem={this.state.selectedItem} ice={this.state.ice}
          sugar={this.state.sugar}  ingredient={this.state.ingredient}  
          slecIce={this.state.slecIce} slecSugar={this.state.slecSugar} 
          onSugarRadioChange={this.onSugarRadioChange} handleCheckbox={this.handleCheckbox}
          onIceRadioChange={this.onIceRadioChange}

          handleSubmit={this.handleSubmit}
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