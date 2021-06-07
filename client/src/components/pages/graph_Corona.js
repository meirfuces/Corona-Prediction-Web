import React  ,{ useState } from 'react';
import MainHeader from '../Layout/cart/mainHeader';
import { Line } from 'react-chartjs-2';


const Graph_Corona = (props)=>{
  const dates = ['01.06','02.06','03.06','04.06','05.06','06.06'];
const data = {
    labels: dates,
    datasets: [
      {
        label: 'corona death',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'corona death predict',
        data: [11, 18, 4, 6, 2, 2],
        fill: false,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const [predictJson, setpredictJson] = useState(null);
return (
    <React.Fragment>
       {/* <h1>graph corona</h1> */}
            <Line data={data} options={options} />

</React.Fragment>
);
}

export default Graph_Corona;