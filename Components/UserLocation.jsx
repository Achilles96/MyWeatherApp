import React, {useState, useEffect} from 'react'






function UserLocation () {

const [userLocation, SetUserLocation] = useState(null);
const [error, setError] = useState(null);
const API_KEY = import.meta.env.VITE_APP_ID;

useEffect(() => {

const getUserLocation =() => {

if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(
    (position) => {

    const {latitude, longitude} = position.coords;
    SetUserLocation ({ latitude, longitude});
    },
     (error) => {
        console.error('Error getting user location:' , error);
        setError("Couldn't get your location")

        const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit={limit}&appid=${API_KEY}`
        console.log("API URL:", url);
      }
      
);

}else{
setError("Geolocation is not supported by this browser.");
  }
}; 

getUserLocation();
}, []);

return (
    <div>
      {error && <p>{error}</p>}
      {userLocation ? (
        <p>
          Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default UserLocation;

