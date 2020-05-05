import React from 'react';

let Checkbox = (props) => {
  return(
    <li>
      <label> 
        <input key={props.id} type="checkbox" value={props.value} checked={props.isChecked} onChange={props.handleCheckbox} />
        <span> {props.value} </span>
      </label>
    </li>
  );
}

export default Checkbox;