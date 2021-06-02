import React ,{ useEffect, useState } from "react";
// import './css/TableSicks'
import '../css/TableSick.css';
import classes from '../css/Button.module.css';
import {createApiClient} from '../api';
import Card from './Card';
import Button from './Butten/Button';
import {Route, Link} from 'react-router-dom';
import TableSickDeatails from './TableSickDetails';
const api = createApiClient();
const TableSicks =(props)=>{
  const [tableSickState, setTableSickState] = useState(null);
  const [showMoreState, setshowMoreState] = useState(false);
  useEffect(() => {
    async function fetchMyAPI() {
      const res = await api.getJsonState();
      setTableSickState(res.data)
      console.log('tableSick did mount');
      console.log(tableSickState);

    }
  
 
  }, [])
    return (
      <Card>
  <div className="TableSicks">
  <Route path = {'/welcome/${props.data}'}>
  <TableSickDeatails/>
  </Route>
        <table >
            <tr>
          <th>date</th>
          <th>country</th>
          <th>totMapChartal_cases</th>
          <th>new_cases</th>
          {showMoreState? <th>new_deaths</th>: null}
          
          </tr>
          <tr>
            
    <td >{props.date}</td>
    <td>{props.country}</td>
    <td>{props.total_cases}</td>
    <td>{props.new_cases}</td>
    {showMoreState?     <td>{props.new_deaths}</td>: null}
    <Link className={classes.showGraph} to={`/country/${props.country}`}>show all graph</Link>
      {/* <Link className={classes.showMore} to={'/country/${props.country}'} > show all graph</Link> */}
   

  </tr>



     
        </table>
         {!showMoreState?
        <button className={classes.showMore} onClick={()=>setshowMoreState(!showMoreState)}>  showMore </button>
        :
        <button className={classes.showLess}onClick={()=>setshowMoreState(!showMoreState)}> showLess</button> 
  
} 
</div>
</Card>
    )};
export default TableSicks;