import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Components/card';
import Header from './Components/header'
import BarChart from './Components/barChart';

function App() {

  const [data, setData] = useState();
  const [city, setCity] = useState();

  var today = new Date();
  var d = String(today.getDate()).padStart(2, '0');
  var m = String(today.getMonth() + 1).padStart(2, '0'); 
  var y = today.getFullYear();

  var end_date=y + '-' + m + '-' + d;

  var ed,em;
  if(d-7<=0){
    ed=String(30+(d-7)).padStart(2,'0');
    em=String(m-1).padStart(2,'0');
  }
  var start_date=y + '-' + em + '-' + ed;
  console.log(start_date);
  console.log(end_date);

  useEffect(() => {
    if (city){
      axios.get(`https://climate-api.open-meteo.com/v1/climate?latitude=${city.latitude}&longitude=1${city.longitude}&start_date=${start_date}&end_date=${end_date}&models=MRI_AGCM3_2_S&daily=temperature_2m_mean,relative_humidity_2m_mean,rain_sum`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }}, [city]);

  console.log(data);  
  const fromChild = data => setCity(data.results[0]);

  return (
    <>
      <Header returnFunc={fromChild} />
      <div className="container">
        <div className="card-container">
          <Card
            title="Weekly Temperature"
            img="temp.png"
            array={data?.daily.temperature_2m_mean}
            unit={data?.daily_units.temperature_2m_mean} />
          <Card
            title="Weekly Humidity"
            img="humid.png"
            array={data?.daily.relative_humidity_2m_mean}
            unit={data?.daily_units.relative_humidity_2m_mean} />
          <Card
            title="Weekly Rainfall"
            img="cloud.png"
            array={data?.daily.rain_sum}
            unit={data?.daily_units.rain_sum} />
          <Card
            title="Current Temperature"
            img="celsius.png"
          />
        </div>
        
        <BarChart chartData={data?.daily.temperature_2m_mean} starting_day={Number(ed)} starting_month={Number(em)}/>
      </div>

    </>

  );
}

export default App;
