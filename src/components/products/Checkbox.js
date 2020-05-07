import React from 'react';

let Checkbox = (props) => {
  return(
    <div>
      <li>
        <label> 
          <input key={props.id} type="checkbox" value={props.value} checked={props.isChecked} onChange={props.handleCheckbox} />
          <span> {props.value} </span>
        </label>
      </li>
    </div>
  );
}

export default Checkbox;