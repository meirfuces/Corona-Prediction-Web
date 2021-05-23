import React from 'react';
import '../../css/Button.css';

const Button =(props)=>{
    return (
  <div >
      {0<props.currpage-50 ? <button className={props.class || "button"} onClick={ props.clickedBack}>backPage</button>: null
 }

              {props.length>props.currpage ?   <button className="button" onClick={props.clickedNext}>nextPage</button>: null}
     
</div>
    )};
export default Button;