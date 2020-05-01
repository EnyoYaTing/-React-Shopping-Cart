import React from 'react';

function ShoppingCart(props) {
  const LEN = props.cart.length;
  if (LEN === 0) {
    return (
      <div className="shoppingCart">
        <h3> 購物清單 </h3>
        <hr />
        <p> 還沒有東西喔 </p>
        <hr />
        <strong> total: </strong>
        <strong> NT$ 0 </strong>
      </div>
    );
  } else {
      let cart = props.cart.map(content => {
        const {id, item, num, price, ice, sugar, ingredient} = content;
        return (
          <div key={id}>
            <div className="cart-grid">
              <div>
                <strong> {item} </strong> <p> id: {id}</p>
              </div>
              <button > - </button>
              <p> {num} </p>
              <button> + </button> 
              {/* <button onClick={props.addMoreItem(id)}> + </button>  */}
            </div>      
            <div>  
              <p> 價格： {price} </p>
              <p> 冰量：{ice} </p>
              <p> 甜度： {sugar} </p>
              <p> 加料： {ingredient} </p>
              <hr />
            </div>
          </div>
        );
      })

      return (
        <div className="shoppingCart">
          <h3> 購物清單 </h3>
          {cart}
          <strong> total: </strong>
          <strong> NT$ {props.totalPrice} </strong>
        </div>  
      );
  }
            
}

export default ShoppingCart;