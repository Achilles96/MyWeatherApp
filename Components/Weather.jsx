import './Weather.css'
import React from 'react'
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

const Weather = () => {


  const search = async ()=>{
    try {

    } catch (error){
      
    }
  }


  return (
    <div className='weather'>
           <div className='search_bar' >
             <input type="text" placeholder='search'/>
             <button className='search_button'>
             <img className='search_icon' src={search_Icon} alt = "search"/>
             </button>
           </div>

          <div className='weather_details'>
              <img className='cloudy_icon' src={cloudy_icon} alt="cloudy" />
              <p className='celcious'>35℃</p>
              <p className='city'>Athens</p>
              <p className='time'>16:00</p>
              <p>Low 20℃ - high 35℃</p>
              <p>Feels like 40℃</p>
              <p>Humidity 70%</p>

              

              </div>
              
          
          
    </div>
  )
}

export default Weather
