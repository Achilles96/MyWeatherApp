import './Weather.css'
import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import search_Icon from '../src/assets/searchIcon.png'
import FormattedDate from './DateTime'
import IconChange from './IconsUpdate'
import UserLocation from './UserLocation'




const Weather = ()=>{
  const [data, setData] = useState({})
  const [city, setCity] = useState ('')
  const [location, setLocation] = useState('')
  const API_KEY = import.meta.env.VITE_APP_ID;


  const onLocationUpdate = (cityName) => {
    setLocation(cityName);
    searchCity(); // Call searchCity to fetch weather for this city
  };

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
  
};



  return (
    <div className='weather'>
       <UserLocation onLocationUpdate = {onLocationUpdate} />
       {location && <p className='location'>Your location is: {location}</p>}

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
          {data.weather && data.weather.length > 0 ? (
    <IconChange condition={data.weather[0].description} />
  ) : (
    ""
  )}



              <p className='celcious'>{data.main ? `${Math.round(data.main.temp)}℃` : ""}</p>
              
              <p className='city'>{data.name ? data.name: ""}</p>
              <p className='description'>
              {data.weather && data.weather.length > 0 ? data.weather[0].description : ""}
              </p>
              <FormattedDate unixTimestamp={data.dt} timezoneOffset={data.timezone} />
              <p className='low_high'>Low {data.main ? `${Math.round(data.main.temp_min)}℃` : ""} - High {data.main ? `${Math.round(data.main.temp_max)}℃` : ""}</p>
              <p>Feels like {data.main ? `${Math.round(data.main.feels_like)}℃` : ""}</p>
              <p>Humidity {data.main ? `${data.main.humidity}%` : ""}</p>
             
               {/* Debugging wind speed */}
               <p>Wind Speed: {data.wind ? `${data.wind.speed} m/s` : ""}</p>

              </div>              
    </div>
  )
}

export default Weather
