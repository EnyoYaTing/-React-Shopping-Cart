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


function TestSelect(props) {
  let choices = props.choices.map((item)=>{
    return (
      <div>
        <RenderChoices item={item} key={item.id}/>
      </div>  
    );
  })

  return (
    <div>
      test !
      <form>
        <ul>
          {choices}
        </ul>
      </form> 
    </div>  
  );
}

export default TestSelect;