import React from 'react'
import cloudy_icon from '../src/assets/cloudy.png'
import drizzle_icon from '../src/assets/drizzle.png'
import snowy_Icon from '../src/assets/snowy.png'
import storm_Icon from '../src/assets/storm.png'
import sun_Icon from '../src/assets/sun.png'
import clouds_icon from '../src/assets/clouds.png'
import moon_icon from '../src/assets/moon clear.png'
import moon_cloudy_icon from '../src/assets/moon cloudy.png'

const Icon = ({condition}) => {
const renderIcon = ()=>{
    switch(condition){

case "clear sky": 
return <img className='icon' src={sun_Icon} alt="Sunny" />;

case "few clouds": 
return  <img className='icon' src={cloudy_icon} alt="few clouds" />;

case "scattered clouds": 
return <img className='icon' src={clouds_icon} alt="scattered clouds" />;

case "broken clouds": 
return <img className='icon' src={clouds_icon} alt="broken clouds" />;

case "shower rain": 
return <img src={sun_Icon} alt="Sunny" />;

case "rain": 
return <img src={drizzle_icon} alt="rain" />;

case "thunderstorm": 
return <img src={storm_Icon} alt="thunderstorm" />;

case "snow": 
return <img src={snowy_Icon} alt="snow" />;

case "mist": 
return <img src={sun_Icon} alt="Sunny" />;

default:
        return <p>Weather condition unknown</p>;

  }
}
return (
    <div className="weather-icon">
      {renderIcon()}
    </div>
  );
};

export default Icon;