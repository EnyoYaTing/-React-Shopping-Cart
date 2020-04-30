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
          {/* 表單 */}
          <form>
            { props.custom.map(item => {
                if(item.id !== 2) {
                  return(
                    <div>
                      <strong> {item.name} </strong>
                      <hr />
                      <label>
                        <span> {item.one} </span>
                        <input type="radio" value={item.one} checked={props.value === item.one} onChange={props.handleChange} />
                      </label>
                      <label>
                        <span> {item.two} </span>
                        <input type="radio" value={item.two} checked={props.value === item.two} onChange={props.handleChange} />
                      </label>
                      <label>
                        <span> {item.three} </span>
                        <input type="radio" value={item.three} checked={props.value === item.three} onChange={props.handleChange}/>
                      </label>
                      <label>
                        <span> {item.four} </span>
                        <input type="radio" value={item.four} checked={props.value === item.four} onChange={props.handleChange}/>
                      </label>
                    </div>  
                  );
                } else {
                    return (
                      <div>
                        <strong> {item.name} </strong>
                        <hr />
                        <label>
                          <span> {item.one} </span> 
                          <input type="checkbox" name={item.one} />
                        </label>
                        <label>
                          <span> {item.two} </span>
                          <input type="checkbox" name={item.two} />
                        </label>
                        <label>
                          <span> {item.three} </span>
                          <input type="checkbox" name={item.three} />
                        </label>
                        <label>
                          <span> {item.four} </span>
                          <input type="checkbox" name={item.four} />
                        </label>
                      </div>  
                    );
                }
              })
            }

            <div className="select-button-grid">
              <button> - </button>
              <p> 數量： 2</p>
              <button> + </button>
              <button onClick={props.closeSelection}> comfirm </button>
            </div>
          </form>  
         
        </div>    
      </div>  
    );
  }  
}

export default Selection;