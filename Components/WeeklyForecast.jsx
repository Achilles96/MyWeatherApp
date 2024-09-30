import React, {useState, useEffect} from 'react'
import axios from 'axios';




function forecast ({}){
    const API_KEY = import.meta.env.VITE_APP_ID;
    const 


}



const weatherForecast = () => {
    axios.get("api.openweathermap.org/data/2.5/forecast?q=${city name}&appid={API key}")

}




return (
    <div>
      
    </div>
  )

export default forecast;
