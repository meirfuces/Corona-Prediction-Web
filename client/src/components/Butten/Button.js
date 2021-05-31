import React from 'react';
import '../../css/Button.module.css';
import classes from '../../css/Button.module.css';

const Button =(props)=>{
    return (
  <div >
      {0<props.currpage-50 ? <button className={classes.NextButton ||props.classes} onClick={ props.clickedBack}>backPage</button>: null
 }

              {props.length>props.currpage ?   <button className={classes.BackButton||props.classes} onClick={props.clickedNext}>nextPage</button>: null}
     
</div>
    )};
export default Button;