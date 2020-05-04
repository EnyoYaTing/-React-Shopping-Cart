import React from 'react';

let RenderChoices = ({item}) => {
  let {title, data} = item;
  
  let label = data.map( elem => {
    return (
      <li>
        <label> 
          <input type="radio" value={elem}/>
          <span> {elem} </span>
        </label>
      </li> 
    );
  })

  return (
    <div>
      <strong> {title} </strong>
      {label}
      <hr />
    </div>  
  );  
}

function Select(props) {
  let selection = props.showSelection ? 1 : 0;
  let choices = props.choices.map((item)=>{
    return (
      <div>
        <RenderChoices item={item} key={item.id}/>
      </div>  
    );
  })

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
            <div className="title1"> <strong> {props.selectedItem.name}  </strong> </div>
            <div className="title2"> <strong> NT$ {props.selectedItem.price} </strong> </div>
          </div>
          <hr />

          <form onSubmit={props.handleSubmit}>
            <ul>
              {choices}
            </ul>

            <hr />
            <div className="select-button-grid">
                <button onClick={props.deleteDrinkQuantity}> - </button>
                <p> <strong> {props.drinkQuantity} </strong> </p>
                <button onClick={() => {props.addDrinkQuantity()}}> + </button>
                <button disabled={!props.drinkQuantity} onClick={()=> {props.closeSelection(); 
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