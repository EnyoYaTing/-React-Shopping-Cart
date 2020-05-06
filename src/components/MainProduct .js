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
    // let check = this.state.ingredient.map(list => {
    //   return(
    //     (list.isChecked) ? `${list.value} ` : '' 
    //   );
    // })

    // let ice = this.state.slecIce;
    // let sugar = this.state.slecSugar;
    // alert('A name was submitted: ' + " " + ice + " " + sugar + " " + check);
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
    let id = this.state.selectedItem.id;
    let name = this.state.selectedItem.name;
    let quantity = this.state.drinkQuantity;
    let sugar = this.state.slecSugar;
    let ice = this.state.slecIce;
    let check = this.state.ingredient.filter(item => item.isChecked === true);
    let ingredient = check.map( i =>{ return i.value });
    let price = (this.state.selectedItem.price) * (this.state.drinkQuantity);
    let obj = {id, name, quantity, ice, sugar, ingredient, price};
    
    this.state.cart.push(obj);
  }


  // --- 測試中 ----
  addQuantityInCart = (id) =>{
   let indexOfItemInArray = this.state.cart.findIndex(item => item.id === id); // index
   let obj = this.state.cart.find(item => item.id === id) //obj in cart
   obj.quantity += 1;
   let cart = this.state.cart.splice(indexOfItemInArray, 1, obj);

   this.setState({
     cart: cart
   });
  }

  // --- 測試中 ---


  render() {
    console.log(this.state.cart)
    return (
      <div>
        <div className="main-container">
          <Products drinks={this.state.drinks} openSelection={this.openSelection} addDrinkItemToSelection={this.addDrinkItemToSelection}/>
          <ShoppingCart cart={this.state.cart} totalPrice={this.state.totalPrice}
                        addQuantityInCart={this.addQuantityInCart}
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