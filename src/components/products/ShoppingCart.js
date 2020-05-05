import React from 'react';

function ShoppingCart(props) {
  const LEN = props.cart.length;
  if (LEN === 0) {
    return (
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
  } else {
      let cart = props.cart.map(content => {
        const {id, drink, quantity, ice, sugar, ingredient, price} = content;
        return (
          <div key={id}>
            <div className="cart-grid">
                <p className="left"> {id} {drink} </p> 
                <div className="inline">
                  <button> - </button>
                  <p> {quantity} </p>
                  <button> + </button>
                </div>
                <p className="right"> NT$ {price} </p>
              
              {/* <button onClick={props.addMoreItem(id)}> + </button>  */}
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
            <hr className=""/>
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

export default ShoppingCart;