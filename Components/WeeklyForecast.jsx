import React, {useState, useEffect} from 'react'
import axios from 'axios';




function forecast ({city}){
    const API_KEY = import.meta.env.VITE_APP_ID;
    const [forecast, setForecast] = useState()


}



const weatherForecast = () => {
    axios.get("api.openweathermap.org/data/2.5/forecast?q=${city name}&appid={API key}")
console.log("api url"), 
}




return (
    <div className='forecast'>
      <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  
    </div>
  )
export default forecast;
