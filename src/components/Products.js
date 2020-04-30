import React from 'react';

function RenderItems({item, openSelect}) {
  const {name, price, image} = item;
  return (
    <div className="card grid-container">
      <div className="item1">
        <img src={image} alt={name} width="80%"/>
      </div>
      <div className="item2">  
        <p> {name} </p>
        <p> NT${price} </p>
        <button onClick={openSelect}> + </button>
      </div>  
    </div>
  );
}

function Products(props) {
  let drinks = props.drinks.map(item => {
    return (
      <div className="card-grid " key={item.id} >
        <RenderItems  item={item} openSelect={props.openSelection}/>
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