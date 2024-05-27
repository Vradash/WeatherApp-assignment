import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Components/card';
import Header from './Components/header'
import CanvasJSReact from '@canvasjs/react-charts';


function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://climate-api.open-meteo.com/v1/climate?latitude=52.52&longitude=13.41&start_date=2024-05-16&end_date=2024-05-25&models=MRI_AGCM3_2_S&daily=temperature_2m_mean,relative_humidity_2m_mean,rain_sum`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(data);  


  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 25  },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]
  }
  
  return (
    <>
      <Header />
      <div className="container">
        <Card
          title="Weekly Temperature"
          img="../public/images/thermometer-celsius.svg"
          array={data?.daily.temperature_2m_mean}
          unit={data?.daily_units.temperature_2m_mean} />
        <Card
          title="Weekly Humidity"
          array={data?.daily.relative_humidity_2m_mean}
          unit={data?.daily_units.relative_humidity_2m_mean} />
        <Card
          title="Weekly Rainfall"
          array={data?.daily.rain_sum}
          unit={data?.daily_units.rain_sum} />
        <Card
          title="Current Temperature"
        />
      </div>

      <div className="container chart" id="tester">
      <CanvasJSChart options = {options}
          /* onRef = {ref => this.chart = ref} */
        />
      </div> 
    </>

  );
}

export default App;
