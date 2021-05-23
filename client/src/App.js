import {Data} from './components/data';
import React, { Component } from 'react';
import {data2}  from './components/data2';
import './css/App.css';
import TabkeSick from './components/TableSicks';
import './css/TableSick.css'
import  MapChart from './components/MapChart';
import {createApiClient} from './api';
import Button from './components/Butten/Button';
import PieChart from './components/PieChart';
const api = createApiClient();


class App extends Component {
  state = {
    data: null,
    allData:null,
    page: 50,
    welcome: "welcome"
  }
  async componentDidMount(){
    console.log("didMount");
   const res = await api.getJsonState();
   console.log(res);
    this.setState({data: res.data.slice(0,this.state.page),
        allData:res.data
    })
    console.log(this.state.data);
    console.log('after sort');
    console.log(this.state.page);
    }
    async componentDidUpdate(prevProps,prevState,snapshot) {
      // Typical usage (don't forget to compare props):
      if (this.state.page !== prevProps.page && this.state.page !== prevState.page) {
        console.log(prevProps, prevState, snapshot);
       const res = await api.getJsonState();
        this.setState({data: res.data.slice(this.state.page-50,this.state.page)
      })
    }
 
}
  nextPage = () =>{
    this.setState({welcome: "hello",
    page:this.state.page+50})
  }
  backPage =()=>{
    this.setState({welcome: "hello",
    page:this.state.page-50})
  }
  sort =() =>{


    // const dataSort = [...this.state.data]
    // dataSort.sort((a,b)=> {
    //   return a['new_cases']<b['new_cases']
    // })
    const dataSort =this.state.data.sort((a,b) =>{
      console.log();
      return a.new_cases> b.new_cases
    }
    );
    this.setState({data: dataSort })
  
  }

  byCountry = () =>{
    console.log( api.getJsonByCountry);

  }

  render () {
  console.log(this.state.data);                                                                                                                                                                              // const table = this.state.table.slice(0,4);
  return (
  
    <div className="tableSick">
      {/* <PieChart></PieChart> */}
  {/* <div>
                <MapChart />

  </div> */}
     
<h1>corona web</h1>
    <Button clickedNext ={this.nextPage} clickedBack={this.backPage} length = {211} currpage = {this.state.page}>ss</Button>
        { this.state.data? this.state.data.map(table =>
        <TabkeSick
         table = {this.state.allData}
        key = {table.index}
        date = {table.date}
        total_cases = {table.total_cases} 
        country ={table.location}
        new_cases = {table.new_cases} 
        new_deaths={table.new_deaths}> fdf 
        </TabkeSick>

   
        ): null}
      
{this.state.data? 
this.state.data[0].continent : null}




  </div>
  
  );
}
}
export default App;
