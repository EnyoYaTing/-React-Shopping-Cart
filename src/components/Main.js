import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import Select from './Select';
import { DRINKS } from '../shared/drinks';
// import { CUSTOM } from '../shared/custom';
import { ICE, SUGAR, INGREDIENT } from '../shared/customs';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: DRINKS,
      // custom: CUSTOM,
      showSelection: false,
      ice: ICE,
      sugar: SUGAR,
      ingredient: INGREDIENT,
      iceList: '正常冰',
      sugarList: '正常糖',
      ingredientList: [
        {id:0, list: '珍珠', check: false},
        {id:1, list: '椰果', check: false},
        {id:2, list: '仙草', check: false},
        {id:3, list: '蘆薈', check: false}
      ],
      drinkItem: '',
      drinkPrice: 0,
      singleDrinkTotal: 0,
      singleDrinkTotalPrice: 0,
      cart: []
    }

    this.openSelection = this.openSelection.bind(this);
    this.closeSelection = this.closeSelection.bind(this);
    this.handleIceChange = this.handleIceChange.bind(this);
    this.handleSugarChange = this.handleSugarChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addDrinkItem = this.addDrinkItem.bind(this);
    this.addDrinkQuantity = this.addDrinkQuantity.bind(this);
    this.deleteDrinkQuantity = this.deleteDrinkQuantity.bind(this);
    this.addDrinkPrice = this.addDrinkPrice.bind(this);
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
      singleDrinkTotal: 0,
      singleDrinkTotalPrice: 0
    });  
  }

  addDrinkItem(drink, price) {
    this.setState({
      drinkItem: drink,
      drinkPrice: price
    });
  }

  handleIceChange = (e) => {
    this.setState({
      iceList: e.target.value
    });
    console.log(this.state.iceList)
  }

  handleSugarChange = (e) => {
    this.setState({
      sugarList: e.target.value
    });
    console.log(this.state.sugarList)
  }

  handleIngredientChange(index){
    let arrLists = this.state.ingredientList
    
    if (arrLists[index].check) {
      arrLists[index].check = false; 
    }   
    else {
      arrLists[index].check = true;
    }

    this.setState({
      ingredientList: arrLists
    })
  }

  handleSubmit(event) {
    let check = this.state.ingredientList.map(list => {
      return(
        (list.check) ? `${list.list} ` : '' 
      );
    })
    alert('A name was submitted: ' + this.state.drinkItem+ " " + this.state.iceList + " " + this.state.sugarList + " "+ check);
     
    event.preventDefault();
  }

  // handle Drink Quantity
  addDrinkQuantity() {
    let total = this.state.singleDrinkTotal+1; 
    this.setState({
      singleDrinkTotal: total   
    })
  }

  deleteDrinkQuantity() {
    let total;
    if (this.state.singleDrinkTotal === 0) {
      total = 0;
    } else {
      total = this.state.singleDrinkTotal-1;
    }

    this.setState({
      singleDrinkTotal: total   
    })
  }

  // handle Drink Price
  addDrinkPrice(price) {
    let total = this.state.singleDrinkTotalPrice + price;
    this.setState({
      singleDrinkTotalPrice: total  
    });
  }

  // handle item in cart
  addToCart(item, num, price, ice, sugar, ingredient) {
    let obj = {item, num, price, ice, sugar, ingredient};
    this.state.cart.push(obj);
  }

  
  render() {
    return (
      <div>
        <div className="main-container">
          <Products drinks={this.state.drinks} openSelection={this.openSelection} addDrinkItem={this.addDrinkItem} />
          <ShoppingCart cart={this.state.cart}/>
        </div>  
        <Select ice={this.state.ice} sugar={this.state.sugar} ingredient={this.state.ingredient}
                showSelection={this.state.showSelection} closeSelection={this.closeSelection} 
                handleIceChange={this.handleIceChange} handleSugarChange={this.handleSugarChange}
                handleIngredientChange={this.handleIngredientChange} handleSubmit={this.handleSubmit}
                iceList={this.state.iceList} sugarList={this.state.sugarList}
                ingredientList={this.state.ingredientList}
                drinkItem={this.state.drinkItem} drinkPrice={this.state.drinkPrice}
                addDrinkQuantity={this.addDrinkQuantity} singleDrinkTotal={this.state.singleDrinkTotal}
                deleteDrinkQuantity={this.deleteDrinkQuantity}
                addDrinkPrice={this.addDrinkPrice} singleDrinkTotalPrice={this.state.singleDrinkTotalPrice}
                addToCart={this.addToCart}
        />  
      </div>
    );
  }
}

export default Main;