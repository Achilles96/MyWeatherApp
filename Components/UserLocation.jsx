import React, {useState, useEffect} from 'react'
import axios from 'axios';






function UserLocation ({onLocationUpdate}) {

const [userLocation, setUserLocation] = useState(null);
const [error, setError] = useState(null);
const [city, setCity] = useState(null);
const API_KEY = import.meta.env.VITE_APP_ID;

useEffect(() => {
const getUserLocation =() => {
if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(
    (position) => {
    const {latitude, longitude} = position.coords;
    setUserLocation ({ latitude, longitude});
  

axios.get(
  `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
)
.then((response) => {
  if (response.data.length > 0 ){
    const city = response.data[0].name;
    console.log("City from reverse geocoding:", city)
    onLocationUpdate (city);
  }
})

.catch((error) => {
  console.error("Error fetching city name", error);
  setError("Couldn't get your location from the API.");
});
},



     (error) => {
        console.error('Error getting user location:' , error);
        setError("Couldn't get your location")

        // const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit={limit}&appid=${API_KEY}`
        // console.log("API URL:", url);
      }
      
);

}else{
setError("Geolocation is not supported by this browser.");
  }
}; 

getUserLocation();
}, [API_KEY]);

return (
    <div>
      {error && <p>{error}</p>}
      {city ? (
        <p>
          Your location is {city}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserLocation;

