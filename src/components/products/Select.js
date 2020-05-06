import React from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';


function Select(props) {
  let selection = props.showSelection ? 1 : 0;
  let ice = props.ice.map((option)=>{
    return(
      <Radio key={option.id} id={option.id} value={option.value} 
            ischecked={props.slecIce === option.value} onChange={props.onIceRadioChange}
      />
    )    
  })

  let sugar = props.sugar.map((option)=>{
    return(
      <Radio key={option.id} id={option.id} value={option.value} 
            ischecked={props.slecSugar === option.value} onChange={props.onSugarRadioChange}
      />
    )    
  })

  let ingredient = props.ingredient.map((option) => {
    return(
      <Checkbox key={option.id} id={option.id} value={option.value} 
                ischecked={option.isChecked} handleCheckbox={props.handleCheckbox}
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
            <p>冰量</p> {ice} <hr />
            <p>甜度</p> {sugar} <hr />
            <p>加料</p> {ingredient} <hr />
            <div className="select-button-grid">
                <button onClick={props.deleteDrinkQuantity}> - </button>
                <p> <strong> {props.drinkQuantity} </strong> </p>
                <button onClick={() => {props.addDrinkQuantity()}}> + </button>
                <button disabled={!props.drinkQuantity} 
                        onClick={()=> {props.addToCart(); props.closeSelection()}
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