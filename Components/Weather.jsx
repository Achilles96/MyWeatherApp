import './Weather.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DateTime from './DateTime'
import search_Icon from '../src/assets/searchIcon.png'
import cloudy_icon from '../src/assets/cloudy.png'
import drizzle_icon from '../src/assets/drizzle.png'
import humidity_icon from '../src/assets/humidity.png'
import moon_icon from '../src/assets/moon clear.png'
import moon_cloudy_icon from '../src/assets/moon cloudy.png'
import snowy_Icon from '../src/assets/snowy.png'
import storm_Icon from '../src/assets/storm.png'
import sun_Icon from '../src/assets/sun.png'
import wind_Icon from '../src/assets/wind.png'





const Weather = ()=>{
  const [data, setData] = useState({})
  const [city, setCity] = useState ('')
  const API_KEY = import.meta.env.VITE_APP_ID;


const searchCity = ()=>{
  if (city.trim() !== '') {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log("API URL:", url);

    axios.get(url)
    .then((response) =>{
      setData(response.data)
      console.log(response.data)
     ;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      // Optionally, display an error message to the user
  })
  }
}
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    searchCity()
  }
  
}
const getLocalTime = () => {
  if (!data.timezone) return 'N/A';

  const timezoneOffsetInSeconds = data.timezone;
  const localDate = new Date(new Date().getTime() + timezoneOffsetInSeconds * 2000);
  return localDate.toLocaleTimeString();}


  return (
    <div className='weather'>
           <div className='search_bar' >
             <input 
             value={city}
             onChange={event =>setCity(event.target.value)}
             type="text" placeholder='search'
             onKeyDown={handleKeyPress}/>

             <button onClick={searchCity} className='search_button'>
             <img className='search_icon' src={search_Icon} alt = "search"/>
             </button>
           </div>

          <div className='weather_details'>
              <img className='cloudy_icon' src={cloudy_icon} alt="cloudy" />


              <p className='celcious'>{data.main ? `${data.main.temp}℃` : "N/A"}</p>
              <p className='city'>{data.name ? data.name: "N/A"}</p>
              {/* <p className='time'>{getLocalTime()}</p> */}
              <DateTime></DateTime>
              <p>Low {data.main ? `${data.main.temp_min}℃` : "N/A"} - High {data.main ? `${data.main.temp_max}℃` : "N/A"}</p>
              <p>Feels like {data.main ? `${data.main.feels_like}℃` : "N/A"}</p>
              <p>Humidity {data.main ? `${data.main.humidity}%` : "N/A"}</p>

              

              </div>
              
          
          
    </div>
  )
}

export default Weather
