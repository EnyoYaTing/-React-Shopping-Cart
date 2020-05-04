import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import Select from './Select';
import { DRINKS } from '../shared/drinks';
import { ICE, SUGAR, INGREDIENT } from '../shared/customs';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: DRINKS,
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

      selectedItem: {},
      drinkQuantity: 0,
      cart: [],
      totalPrice: 0
    }

    this.openSelection = this.openSelection.bind(this);
    this.closeSelection = this.closeSelection.bind(this);
    this.addDrinkItemToSelection = this.addDrinkItemToSelection.bind(this);

    this.handleIceChange = this.handleIceChange.bind(this);
    this.handleSugarChange = this.handleSugarChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.addDrinkQuantity = this.addDrinkQuantity.bind(this);
    this.deleteDrinkQuantity = this.deleteDrinkQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
    // this.addMoreItem = this.addMoreItem.bind(this);
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

  addDrinkItemToSelection(id) {
    let addeditem = this.state.drinks.find((item) => item.id === id)

    this.setState({
      selectedItem: addeditem
    })
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
    // let check = this.state.ingredientList.map(list => {
    //   return(
    //     (list.check) ? `${list.list} ` : '' 
    //   );
    // })
    // alert('A name was submitted: ' + this.state.drinkItem+ " " + this.state.iceList + " " + this.state.sugarList + " "+ check);
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

  // addMoreItem(id) {
  //   let menuItem = this.state.drinks.find( drink => drink.id === id);
  //   console.log(menuItem)
  //   // check if existing
  //   let existedItem = this.state.cart.find(drink => id === drink.id);
  //   console.log(existedItem);

  //   let totalNum = existedItem.num + 1;
  //   let totalPrice = existedItem.price + menuItem.price
  //   console.log(totalPrice)

  //   // this.setState({
  //   // })
  // }  

  render() {
    return (
      <div>
        <div className="main-container">
          <Products drinks={this.state.drinks} openSelection={this.openSelection} addDrinkItemToSelection={this.addDrinkItemToSelection}/>
          <ShoppingCart cart={this.state.cart} totalPrice={this.state.totalPrice}
              // addMoreItem={this.addMoreItem}
          />
        </div>  
        <Select ice={this.state.ice} sugar={this.state.sugar} ingredient={this.state.ingredient}
                showSelection={this.state.showSelection} closeSelection={this.closeSelection} 
                selectedItem={this.state.selectedItem}
                handleIceChange={this.handleIceChange} handleSugarChange={this.handleSugarChange}
                handleIngredientChange={this.handleIngredientChange} handleSubmit={this.handleSubmit}
                iceList={this.state.iceList} sugarList={this.state.sugarList}
                ingredientList={this.state.ingredientList}
                addDrinkQuantity={this.addDrinkQuantity} drinkQuantity={this.state.drinkQuantity}
                deleteDrinkQuantity={this.deleteDrinkQuantity}
                singleDrinkTotalPrice={this.state.singleDrinkTotalPrice}
                addToCart={this.addToCart}    
        />  
      </div>
    );
  }
}

export default Main;