import {Data} from './components/data';
import React, { Component } from 'react';
import {data2}  from './components/data2';
import './App.css';
import {createApiClient} from './api';
const api = createApiClient();

class App extends Component {
  print = async() =>{
    try {
      console.log(await api.getJsonState());
    } catch (error) {
      console.log(error);
    }

  }
  render () {
  return (
  
    <div className="stock-container">
        <button onClick={()=> this.print()}>click</button>
      <h1>corona</h1>
      
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
