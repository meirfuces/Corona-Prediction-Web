import React  ,{ useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {createApiClient} from '../../api';
import Graph_Corona from './graph_Corona';
import  MainHeader from '../Layout/cart/mainHeader';
const api = createApiClient();
const TableSickDeatails = (props)=>{
    // const params = useParams();
    const { id } = useParams();
    const [tableSickState, setTableSickState] = useState({});
    const [predictJson, setpredictJson] = useState(null);
    useEffect(() => {
        // async function fetchMyAPI() {
        //   const res = await api.getJsonState();
        //   setTableSickState(res.data);
        //   console.log('tableSick did mount');
    
        // }
        async function fetchMyAPI() {
            const res = await api.getJsonState();
            const res2 = await api.predictByCountry();
            console.log(res2.country[0].dates);
            setpredictJson(
                res2.country[0].dates
            );
            const equalCountry = id;
            const resNew = res.data.filter(data => data.location === equalCountry);
            setTableSickState({
                per_million:resNew[0].total_cases_per_million,
                aged_65_older: resNew[0].aged_65_older,
                aged_70_older: resNew[0].aged_70_older
            });
            console.log(resNew[0]);
            console.log({tableSickState});
            console.log({predictJson});
          }
      
          fetchMyAPI()
        }, [])
 
    return (
    <React.Fragment>
                  <MainHeader />
        <h2>{id}</h2>
<p>total cases by miliion {tableSickState.per_million}</p>
<p>aged_65_older {tableSickState.aged_65_older}</p>
<p>aged_70_older {tableSickState.aged_70_older}</p>
<Graph_Corona predictJson />

    </React.Fragment>
);


}

export default TableSickDeatails