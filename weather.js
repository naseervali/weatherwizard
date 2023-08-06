import { useState } from "react";
import Data from "./data";
import "./weather.css"
function Weather(){
    const [query,setQuery]=useState("")
    const [weather,setWeather]=useState("")
    const change=(e)=>{
        setQuery(e.target.value)
    }
const search=async(e)=>{
    e.preventDefault()
        let data=await Data(query)
           setWeather(data)
    
}
    return(
        <div className="fadeIn">
        <div>
            <div className="container">
            <h1>Weather Wizard</h1>
            <form onSubmit={search}>
              <input type="text" placeholder="search by city ,state,zip...."  onChange={change}/>
              <button className="btn" type="submit">search</button>
              </form>
            </div>
            {weather.main &&
            <div className="wraper">
            <div id="city-name">
            <h4>{weather.name} &nbsp;&nbsp;<span>{weather.sys.country}</span></h4>
            </div>
            <div id="temp">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                 {Math.round(weather.main.temp - 273.15)} &deg; C
                 
            </div>
            <div id="info">
                
                  <p>{weather.weather[0].description}</p>
            </div>
            <div className="details">
                <div id="details1">
                    <h6>Humidity:{weather.main.humidity}%</h6>
                    <h6>Visibility:{weather.visibility} km</h6>
                      <h6>wind:{weather.wind.speed} miles/hour</h6>
                </div>
                <div id="details2">
                    <h6>  sunrise:{weather.sys.sunrise}</h6>
                    <h6> clouds:{ weather.clouds.all}%</h6>
                      <h6> pressure:{weather.main.pressure}hPa</h6>

                </div>
            </div>
              </div> 
              
            }
            
        </div>
        </div>
    )
}
export default Weather;