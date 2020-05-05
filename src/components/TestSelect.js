import React from 'react';
// import Radio from './Radio';
import Checkbox from './Checkbox';

function Select(props) {
  let selection = props.showSelection ? 1 : 0;
  let choices = props.choices.map((item)=>{
    return (
      <div>
        <RenderChoices key={item.id} item={item} 
            selectedRadio={props.selectedRadio} onRadioChange={props.onRadioChange}
        />
      </div>  
    );
  })
  let ingredient = props.ingredient.map((option) => {
    return(
      <Checkbox id={option.id} value={option.value} ischecked={option.isChecked} 
                handleCheckbox={props.handleCheckbox}
      />
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
            {choices}
            <hr />
            {ingredient}
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

let RenderChoices = ({item, selectedRadio, onRadioChange}) => {
  let {id, title, data} = item;
  
  let label = 
    <ul> 
      <strong> {title} </strong>
      {data.map( elem => {
        return (
          <li>
            <label> 
              <input type="radio" value={elem} 
                  checked={selectedRadio === elem} onChange={onRadioChange}
              />
              <span> {elem} </span>
            </label>
          </li> 
        );
      })}
    </ul>

  return (
    <div>
      {label} 
    </div>  
  );  
}

export default Select;