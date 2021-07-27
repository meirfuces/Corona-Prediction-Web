// import {Data} from './components/data';
import React, { Component } from 'react';
// import {data2}  from './components/data2';
import './css/App.css';
import TabkeSick from './components/TableSicks';
import './css/TableSick.css'
import  MapChart from './components/MapChart';
import {createApiClient} from './api';
import Header from './components/Layout/header';
import Button from './components/Butten/Button';
import {Route, Switch, Redirect} from 'react-router-dom';
import PieChart from './components/PieChart';
import Creator_thank from './components/pages/creator_thank';
import MainHeader from './components/Layout/cart/mainHeader';
import Graph_Corona from './components/pages/graph_Corona'
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
   const resNew = res.data.filter(data => data.location === "Paraguay");
    this.setState({data: res.data.slice(0,this.state.page),
        allData:res.data
    })

    const p = this.state.data;
   
 
    }
    async componentDidUpdate(prevProps,prevState,snapshot) {
      // Typical usage (don't forget to compare props):
      if (this.state.page !== prevProps.page && this.state.page !== prevState.page) {
        console.log(prevProps, prevState, snapshot);
        console.log("next ginton");
        
       const res = this.state.allData;
        this.setState({data: res.slice(this.state.page-50,this.state.page)
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
                                                                                                                                                                          // const table = this.state.table.slice(0,4);
  return (
  
    <div className="tableSick">
       
      <main>
        <Switch>
        <Route path='/' exact>
          <Redirect to ='welcome'/>
        </Route>
        <Route path='/welcome'>
        <MainHeader />

        <Button clickedNext ={this.nextPage} clickedBack={this.backPage} length = {this.allData.length} currpage = {this.state.page}></Button>
        
        { this.state.data? this.state.data.map(table =>
        <TabkeSick
         table = {this.state.allData}
        key = {table.index}
        date = {table.last_updated_date}
        total_cases = {table.total_cases} 
        country ={table.location}
        new_cases = {table.new_cases} 
        new_deaths={table.new_deaths}> 
        </TabkeSick>

   
        ): null}
      
{this.state.data? 
this.state.data[0].continent : null}
        </Route>
        <Route path ="/thankAndCreator"><Creator_thank/></Route>
        <Route path ="/graph"><Graph_Corona/></Route>
        </Switch>
       
      </main>
      <Header></Header>
      {/* <PieChart></PieChart> */}
  {/* <div>
                <MapChart />

  </div> */}
     
{/* <h1>corona web</h1> */}






  </div>
  
  );
}
}
export default App;
