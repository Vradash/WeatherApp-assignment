import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Components/card';
import Header from './Components/header'
import BarChart from './Components/barChart';
// import pixabay from './images/pexels-pixabay-531756.jpg'

function App() {

  const [data, setData] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    if (city){
      axios.get(`https://climate-api.open-meteo.com/v1/climate?latitude=${city.latitude}&longitude=1${city.longitude}&start_date=2024-05-19&end_date=2024-05-25&models=MRI_AGCM3_2_S&daily=temperature_2m_mean,relative_humidity_2m_mean,rain_sum`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }}, [city]);

  // console.log(data);  
  const fromChild = data => setCity(data.results[0]);

  return (
    <>
      <Header returnFunc={fromChild} />
      <div className="container">
        <div className="card-container">
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
        
        <BarChart chartData={data?.daily.temperature_2m_mean}/>
      </div>

    </>

  );
}

export default App;
