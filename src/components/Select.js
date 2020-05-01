import React from 'react';

function Select(props) {
  let selection = props.showSelection ? 1 : 0;

  if (!selection) {
    return(
      <div></div>  
    );
  } else {
    return(
      <div className="selection">
        <div className="select-card">
          <strong> {props.drinkItem}   NT$ {props.drinkPrice} </strong>
          <button onClick={props.closeSelection}> X </button>
          <hr />
          <form onSubmit={props.handleSubmit}>
            <div className="ice">
              <strong> 冰量： </strong> 
              { props.ice.map(item => {
                  return(
                    <label key={item.id}> 
                      <span> {item.name} </span>
                      <input type="radio" value={item.name} 
                              checked={props.iceList === item.name} 
                              onChange={props.handleIceChange}
                      />
                    </label>
                  );
                }) 
              }
            </div>
            <div className="sugar">
              <strong> 甜度： </strong> 
              { props.sugar.map(item => {
                  return(
                    <label key={item.id}> 
                      <span> {item.name} </span>
                      <input type="radio" value={item.name} 
                              checked={props.sugarList === item.name} 
                              onChange={props.handleSugarChange}
                      />
                    </label>
                  );
                }) 
              }
            </div>
            <div className="ingre">
              <strong> 加料：</strong> 
              { props.ingredient.map((item, index) => {
                  return(
                    <label key={item.id}> 
                      <span> {item.name} </span>
                      <input type="checkbox" value={item.name} 
                              checked={props.ingredientList.check} 
                              onChange={props.handleIngredientChange.bind(this, index)}
                      />
                    </label>
                  );
                }) 
              }
            </div>
            <strong> total: {props.singleDrinkTotalPrice} </strong>
            <div className="select-button-grid">
                <button onClick={props.deleteDrinkQuantity}> - </button>
                <strong> {props.singleDrinkTotal} </strong>
                <button onClick={() => {props.addDrinkQuantity(); props.addDrinkPrice(props.drinkPrice)}}> + </button>
                <button disabled={!props.singleDrinkTotal} onClick={()=> {props.closeSelection(); 
                      props.addToCart(props.drinkId, props.drinkItem, props.singleDrinkTotal, props.singleDrinkTotalPrice, 
                      props.iceList, props.sugarList)}
                }> 
                  確認
                </button>
            </div> 
          </form>
        </div>    
      </div>  
    );
  }
  
}

export default Select;