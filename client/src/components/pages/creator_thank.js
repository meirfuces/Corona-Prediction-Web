import React from "react";
import MainHeader from '../Layout/cart/mainHeader';
import classes from '../../css/Creator.moudle.css';
const Creator_thank = ()=>{
return (
    <React.Fragment>
            <MainHeader />

<h1 className= {classes.crator} >thanks</h1>
<p className= {classes.crator}>Meir Oz yehonatan and ginton</p>
<p > Oren Barkan</p>
<hr></hr>
<a href= "https://github.com/meirfuces/Corona-Prediction-Web"><h3 > GitHub</h3></a>

</React.Fragment>
);
}

export default Creator_thank;