import {useState} from 'react';
import "./WeatherApp.css"

/* imported images */ 
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


/* imported images */ 
    
const WeatherApp=() => {
    
    //Api Key
    let api_key="0b0d885a80b2c8878919507e5638637c";
    
    //widget icon
    const [wicon,setWicon]=useState(cloud_icon);

    //bg icon
    // const [bg,setBg]=useState(clearly_icon); 
    

    async function search() {

        const inputData=document.getElementsByClassName("cityInput");
        


        if(inputData[0].value==="") {
            return 0;
        }

        // url of the api for given locations
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputData[0].value}&units=Metric&appid=${api_key}`;

        //fetching data
        let response=await fetch(url);

        //converting to json
        let data=await response.json();

        /* Dom accessing */
        const humidity=document.getElementsByClassName("humidity-percentage")[0];
        const wind=document.getElementsByClassName("wind-rate")[0];
        const temperature=document.getElementsByClassName("weather-temp")[0];
        const location=document.getElementsByClassName("weather-location")[0];
        /* Dom accessing */


        /* Dom updating */
        humidity.innerHTML=data.main.humidity+"%";
        wind.innerHTML=(data.wind.speed)+" km/h";
        temperature.innerHTML=Math.floor(data.main.temp)+"°C";
        location.innerHTML=data.name;
        /* Dom updating */

        /* Set image icon according to the weather of the location */
        if((data.weather[0].icon==="01d")||(data.weather[0].icon==="01n")) {
            setWicon(clear_icon);
        }
        else if((data.weather[0].icon==="02d")||(data.weather[0].icon==="02n")) {
            setWicon(cloud_icon);
        }
        else if((data.weather[0].icon==="03d")||(data.weather[0].icon==="03n")) {
            setWicon(drizzle_icon);
        }
        else if((data.weather[0].icon==="04d")||(data.weather[0].icon==="04n")) {
            setWicon(drizzle_icon);
        }
        else if((data.weather[0].icon==="09d")||(data.weather[0].icon==="09n")) {
            setWicon(rain_icon);
        }
        else if((data.weather[0].icon==="10d")||(data.weather[0].icon==="10n")) {
            setWicon(rain_icon);
        }
        else if((data.weather[0].icon==="13d")||(data.weather[0].icon==="13n")) {
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }
        /* Set image icon according to the weather of the location */
    }


     return (
         <div className="container">
             <div className="top-bar">
             
                 <input type="text" className="cityInput form-control" placeholder='Search'/>
                 <div className="search-icon" onClick={() => {search()}} >
                     <img src={search_icon}  alt="search_icon" />
                 </div>
             </div>
             <div className="weather-image">
                 <img src={wicon} alt="cloud_image" id='image' />
             </div>
             <div className="weather-temp">
                 31°C
             </div>

             <div className="weather-location animate__animated animate__rotateInDownLeft">
                 Kolkata
             </div>
             <div className="data-container">
                 <div className="element">
                     <img src={humidity_icon} alt="" className="icon" />
                     <div className="data">
                         <div className="humidity-percentage">
                             64%
                         </div>
                         <div className="text">Humidity</div>
                     </div>
                 </div>
                 <div className="element">
                     <img src={wind_icon} alt="" className="icon" />
                     <div className="data">
                         <div className="wind-rate">
                             18 km/h
                         </div>
                         <div className="text">Wind Speed</div>
                     </div>
                 </div>
             </div>
         </div>
     );
}

export default WeatherApp;
