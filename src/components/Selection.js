import React from 'react';

let Selection = (props) => {
  let selection = props.showSelection ? 1 : 0;

  if (!selection) {
    return (
      <div> </div>
    );
  }
  else {
    return(
      <div className="selection row">
        <div className="col-2">
          <p> name: 珍奶 </p>
          <hr className="line"/>
          <p> 冰量 </p>
          <form>
            <div className="radio">
              <label>
                正常冰
                <input type="radio" value="normal" checked={true} />
              </label>  
            </div>
          </form>
          <button onClick={props.closeSelection}> </button>
        </div>    
      </div>  
    );
  }  
}

export default Selection;