import React from 'react';

function RenderItems({item, openSelect, addDrinkItem}) {
  const {name, price, image} = item;
  return (
    <div className="card">
      <div>
        <img src={image} alt={name} width="90%"/>
      </div>
      <div>  
        <p> {name} </p>
        <p> NT${price} </p>
        <button onClick={()=> {openSelect(); addDrinkItem(item.id, item.name, item.price)}}> + </button>
      </div>  
    </div>
  );
}

function Products(props) {
  let drinks = props.drinks.map(item => {
    return (
      <div className="card-horzontal" key={item.id} >
        <RenderItems  item={item} openSelect={props.openSelection} 
                      addDrinkItem={props.addDrinkItem}
        />
      </div>  
    );  
  })

  return (
    <div>
      {drinks}
    </div>  
  );
}

export default Products;