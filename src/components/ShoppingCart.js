import React from 'react';

function ShoppingCart(props) {
  const LEN = props.cart.length;
  if (LEN === 0) {
    return (
      <div className="shoppingCart">
        <h3> 購物清單 </h3>
        <p> 還沒有東西喔 </p>
      </div>
    );
  } else {
      let cart = props.cart.map(item => {
        return (
          <div className="shoppingCart">
            <h3> 購物清單 </h3>
            <p> 項目名稱：{item.item} </p>
            <p> 數量：{item.num} </p>
            <p> 價格： {item.price} </p>
            <p> 冰量：{item.ice} </p>
            <p> 甜度： {item.sugar} </p>
            <p> 加料： {item.ingredient} </p>
            <hr />
            <p> shopping </p>
            <hr />
            <strong> total: </strong>
            <strong> NT$ 總價 </strong>
          </div>
        );
      })

      return (
        <div>
          {cart}
        </div>  
      );
  }
            
}

export default ShoppingCart;