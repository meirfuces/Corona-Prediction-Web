import {Data} from './components/data';
import React, { Component } from 'react';
import {data2}  from './components/data2';
import './App.css';
import TabkeSick from './components/TableSicks';
import {createApiClient} from './api';
const api = createApiClient();


class App extends Component {
  state = {
    table: [],
    welcome: "welcome"
  }
  async componentDidMount(){
    console.log("didMount");
    
    this.setState({table: await api.getJsonState()})
    
   
    }
  sort =() =>{
    this.setState({welcome: "hello"})
    // this.setState({...this.state.table.data.sort((a,b)=> a>b) })
  }
  print = () =>{
    const dataF = this.state.table.data.filter(comp => comp.location =="Africa" )
 console.log(dataF);
this.setState({
  table: dataF
})
 console.log(this.state.table.data[0].continent);
    // try {
    //   console.log(  api.getJsonState());
    // } catch (error) {
    //   console.log(error);
    // }
   

  }
  byCountry = () =>{
    console.log( api.getJsonByCountry);

  }
  render () {
  return (
  
    <div className="stock-container">
    <p>{this.state.welcome}</p>
      <h1>corona</h1>
      <button onClick={()=> this.print()}>click</button>
      <button onClick={()=> this.sort()}>sort</button>
      <label for="cars">Choose a country:</label>

<select name="country" id="cars">
  <option value="israel">israel</option>
  <option value="tel aviv">tel Aviv</option>
  <option value="mercedes">USA</option>
  <option value="audi">Canada</option>


</select>
<ul>
        { this.state.table.data? this.state.table.data.map(table =>
        <TabkeSick 
        key = {table.index}
        date = {table.date} 
        country ={table.location}
        new_cases = {table.new_cases} > fdf </TabkeSick>
        //  <li>{table.continent}, country {table.location} in data {table.date} new cases {table.new_cases}</li>
   
        ): null}
      </ul>
{this.state.table.data? 
this.state.table.data[0].continent : null}

     {/* {data2.map((data, key) => {
      
      return (
        <table key = {key}>
            <tr>
          <th>date</th>
          <th>total_cases</th>
          <th>new_cases</th>
          </tr>
          <tr key = {key}>
            
    <td >{data.date}</td>
    <td>{data.total_cases}</td>
    <td>{data.new_cases}</td>

  </tr>



     
        </table>
      );
    })}  */}


  </div>
  );
}
}
export default App;
