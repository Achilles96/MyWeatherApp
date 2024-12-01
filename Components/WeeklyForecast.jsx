import React, { useState, useEffect } from 'react'
import axios from 'axios';




function Forecast({ city }) {
  const API_KEY = import.meta.env.VITE_APP_ID;
  const [forecast, setForecast] = useState();


  return (

    <div className='forecast_container'>
        <div> Item 1 </div>
        <div> Item 2 </div>
        <div> Item 3 </div>
        <div> Item 4 </div>
        <div> Item 5 </div>

    </div>
  )

}



const weatherForecast = () => {
  const url = ("api.openweathermap.org/data/2.5/forecast?q=${city name}&appid={API key}")
  axios.get(url)
    .then((response) => {
      setForecast(response.data)
      console.log(response.data)
      console.log("API URL:", url);

    });
}





export default Forecast;
