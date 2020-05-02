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
          <button onClick={props.closeSelection}> X </button>
          <div className="title-grid">
            <div className="title1"> <strong> {props.drinkItem}  </strong> </div>
            <div className="title2"> <strong> NT$ {props.drinkPrice} </strong> </div>
          </div>
          <hr />
          <form onSubmit={props.handleSubmit}>
            <div className="ice">
              <strong> 冰量： </strong>
              <hr /> 
              { props.ice.map(item => {
                  return(
                    <div>
                      <label key={item.id}> 
                        <input type="radio" value={item.name} 
                                checked={props.iceList === item.name} 
                                onChange={props.handleIceChange}
                        />
                        <span> {item.name} </span>
                      </label>
                      <br />
                    </div>
                  );
                }) 
              }
            </div>
            <hr />
            <div className="sugar">
              <strong> 甜度： </strong> 
              <hr />
              { props.sugar.map(item => {
                  return(
                    <div>
                      <label key={item.id}> 
                        <input type="radio" value={item.name} 
                                checked={props.sugarList === item.name} 
                                onChange={props.handleSugarChange}
                        />
                        <span> {item.name} </span>
                      </label>
                      <br />
                    </div>
                  );
                }) 
              }
            </div>
            <hr />
            <div className="ingre">
              <strong> 加料：</strong> 
              <hr />
              { props.ingredient.map((item, index) => {
                  return(
                    <div>
                      <label key={item.id}> 
                        <input type="checkbox" value={item.name} 
                                checked={props.ingredientList.check} 
                                onChange={props.handleIngredientChange.bind(this, index)}
                        />
                        <span> {item.name} </span>
                      </label>
                      <br />
                    </div>
                  );
                }) 
              }
            </div>
            <hr />
            <strong> total: NT$ {props.singleDrinkTotalPrice} </strong>
            <hr />
            <div className="select-button-grid">
                <button onClick={props.deleteDrinkQuantity}> - </button>
                <p> <strong> {props.singleDrinkTotal} </strong> </p>
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