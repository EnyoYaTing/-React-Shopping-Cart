import React, { Component } from 'react';
import ShoppingCart from './products/ShoppingCart';
import Products from './products/Products';
import Select from './products/Select';
import { DRINKS } from '../shared/drinks';
import { ICE, SUGAR, INGREDIENT } from '../shared/customChoice';
import TestSelect from './products/TestSelect';

class MainProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: DRINKS,
      ice: ICE,
      sugar: SUGAR,
      ingredient: INGREDIENT,
      showSelection: false,
      selectedItem: {},
      slecIce: '正常冰',
      slecSugar: '全糖',
      drinkQuantity: 0,
      cart: [],
      totalPrice: 0,
    }
  }
 
  openSelection = () => {
    this.setState({
      showSelection: true,
    });
  }

  closeSelection = () => {
    this.setState({
      showSelection: false,
      drinkQuantity: 0,
      slecIce: '正常冰',
      slecSugar: '全糖'
    });  
  }

  addDrinkItemToSelection = (id) => {
    let addeditem = this.state.drinks.find((item) => item.id === id)

    this.setState({
      selectedItem: addeditem
    })
  }
  
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
  
  handleCheckbox = (e) => {
    let ingredient = this.state.ingredient
    ingredient.forEach(item => {
       if (item.value === e.target.value)
          item.isChecked =  e.target.checked
    })
    this.setState({ingredient: ingredient})
  }
  
  handleSubmit = (event) => {
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
  addToCart = () => {
    let id = this.state.cart.length; // give an new id for each item 
    let name = this.state.selectedItem.name;
    let quantity = this.state.drinkQuantity;
    let sugar = this.state.slecSugar;
    let ice = this.state.slecIce;
    let check = this.state.ingredient.filter(item => item.isChecked === true);
    let ingredient = check.map( i =>{ return i.value });
    let price = (this.state.selectedItem.price) * (this.state.drinkQuantity);
    let obj = {id, name, quantity, ice, sugar, ingredient, price};

    // TODO 
    // const obj = {
    //   id: '1',
    //   name: 'ff',
    // }
    this.state.cart.push(obj);
  }

  /*************************************
   * handle functions in shopping cart *
   * ***********************************/
  addQuantityInCart = (id) =>{
    //console.info(id)
    //id = event.target.value 
    let indexOfItemInArray = this.state.cart.findIndex(item => item.id === id); // index
    this.state.cart[indexOfItemInArray].quantity+=1;
    
    //O(n)
    // [
    //   {id, quatity},
    //   {}
    // ]
    // {
    //   '1': {itemName:'奶茶', quantity: 1}
    // }
    // cart[id].quantity += 2

    this.setState({
      cart: this.state.cart
    });
  }

  deleteQuantityInCart = (id) => {
    let indexOfItemInArray = this.state.cart.findIndex(item => item.id === id); // index
    let cart = this.state.cart;

    if (cart[indexOfItemInArray].quantity >= 1) {
      cart[indexOfItemInArray].quantity-=1;
    } 

    this.setState({
      cart: cart
    })
  }

  addItemPriceInCart = (name) => {
    let cart = this.state.cart;
    let indexOfItemInArray = cart.findIndex(item => item.name === name); // index
    let item = this.state.drinks.find( obj => obj.name === name);
    
    cart[indexOfItemInArray].price += item.price;

    this.setState({
      cart: cart
    })
  }

  reduceItemPriceInCart = (name) => {
    let cart = this.state.cart;
    let indexOfItemInArray = cart.findIndex(item => item.name === name); // index
    let item = this.state.drinks.find( obj => obj.name === name);

    if (cart[indexOfItemInArray].price >= item.price) {
      cart[indexOfItemInArray].price -= item.price;
    }
    
    this.setState({
      cart: cart
    })
  }

  removeItemFromCart = (id) => {
    let cart = this.state.cart;
    let indexOfItemInArray = cart.findIndex(item => item.id === id); // index
    
    if (cart[indexOfItemInArray].quantity === 0) {
      cart.splice(indexOfItemInArray, 1); //remove the item from the cart
    }
    
    this.setState({
      cart: cart
    })
  }
  
  handleTotalOrderPrice = () => {

  }


  render() {
    
    console.log(this.state.cart)
    console.log(this.state.cart.length)

    return (
      <div className="row">
        <div className="col-7">
        {/* <div className="main-container"> */}
          <Products drinks={this.state.drinks} openSelection={this.openSelection} addDrinkItemToSelection={this.addDrinkItemToSelection}/>
        </div>
        <div className="col-5"> 
          <ShoppingCart cart={this.state.cart} totalPrice={this.state.totalPrice}
                addQuantityInCart={this.addQuantityInCart} deleteQuantityInCart={this.deleteQuantityInCart}
                addItemPriceInCart={this.addItemPriceInCart} reduceItemPriceInCart ={this.reduceItemPriceInCart }
                removeItemFromCart={this.removeItemFromCart}
          />
        </div>  
        <Select
          showSelection={this.state.showSelection} closeSelection={this.closeSelection} 
          selectedItem={this.state.selectedItem} ice={this.state.ice} sugar={this.state.sugar}  
          ingredient={this.state.ingredient} drinkQuantity={this.state.drinkQuantity}
          slecIce={this.state.slecIce} slecSugar={this.state.slecSugar} 
          onSugarRadioChange={this.onSugarRadioChange} handleCheckbox={this.handleCheckbox}
          onIceRadioChange={this.onIceRadioChange} handleSubmit={this.handleSubmit}
          addDrinkQuantity={this.addDrinkQuantity} deleteDrinkQuantity={this.deleteDrinkQuantity}
          addToCart={this.addToCart} 
          singleDrinkTotalPrice={this.state.singleDrinkTotalPrice}
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

export default MainProduct;