import React from 'react';

function ShoppingCart(props) {
  const LEN = props.cart.length;
  if (LEN === 0) {
    return (
      <RenderEmptyCart />
    );
  } else {
      let cart = props.cart.map(content => {
        const {id, name, quantity, ice, sugar, ingredient, price} = content;
        return (
          <div key={id}>
            <div className="cart-grid">
                <p className="left"> {id} {name} </p> 
                <div className="inline">
                  <button onClick={()=> {props.deleteQuantityInCart(id); props.ReduceItemPriceInCart(name); props.RemoveItemFromCart(id)} }> - </button>
                  <p> {quantity} </p>
                  {/* <button onClick={props.addQuantityInCart(id)}> + </button> 造成error Maximum update depth exceeded” */}
                  <button onClick={() => {props.addQuantityInCart(id); props.addItemPriceInCart(name)} }> + </button>
                </div>
                <p className="right"> NT$ {price} </p>
            </div>      
            <div> 
              <p> 冰量： {ice} </p>
              <p> 甜度： {sugar} </p>
              <p> 加料： {ingredient.map(item => { return item + " "})} </p>
              <hr />
            </div>
          </div>
        );
      })

      return (
        <div className="shoppingCart">
          <div className="cart-title">
            <p className="thick"> Your Order Summary </p>
            <hr/>
          </div>

          {cart}

          <div className="left">  
            <p className="thick"> Total: </p>
          </div>
          <div className="right">  
            <p className="thick"> NT$ 0 </p>  
          </div>
        </div>  
      );
  }         
}

let RenderEmptyCart = () => {
  return(
    <div className="shoppingCart">
        <div className="cart-title">
          <p className="thick"> Your Order Summary </p>
          <p className="light"> - Nothing Here - </p>
          <hr />
        </div>
        <div className="left">  
          <p className="thick"> Total: </p>
        </div>
        <div className="right">  
          <p className="thick"> NT$ 0 </p>  
        </div>
      </div>
  );
}

export default ShoppingCart;