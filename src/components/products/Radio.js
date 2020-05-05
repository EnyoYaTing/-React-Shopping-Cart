import React from 'react';

const Radio = (props) => {
  return (
    <li>
      <label>
        <input type="radio" value={props.value} checked={props.ischecked} onChange={props.onChange}/>
        <span> {props.value} </span>
      </label>  
    </li>  
  );
}

export default Radio;