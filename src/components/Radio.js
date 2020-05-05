import React from 'react';

const Radio = (props) => {
  return (
    <ul>
      <strong> {title} </strong>
      {data.map( elem => {
        <li>
          <label> 
            <input type="radio" value={elem} checked={selectedRadio === elem} onChange={onRadioChange}/>
            <span> {elem} </span>
          </label>
        </li>
      })}
    </ul>  
  );
}

export default Radio;