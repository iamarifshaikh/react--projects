import React from 'react'
import '../Styles/Weather.css';
import { RiSearchLine } from 'react-icons/ri';
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
const Weather = ({ searchTerm, setSearchTerm, weatherInfo, setWeatherInfo, getWeatherInfo }) => {
  
    const { temp, humidity, pressure, country, sunset, weathermood, name, speed,max,min } = weatherInfo;
    
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    const today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[today.getDay()];

    return (
    <div className='weather'>
          <div className='weatherOne'>
              <div className='search'>
                    <input
                    type="search"
                    placeholder='Search..'
                    autoFocus
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button onClick={getWeatherInfo}><RiSearchLine /></button>
              </div>

                <div className='weatherImage'>
                  <i className={"wi wi-day-sunny"}></i>    
                </div>

                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>

                <div>{[day]}</div>
          </div>
            <div className='weatherTwo'>
                
                <div className='whichDetail'>
                    <span>{name}</span> <br />
                    <h5>Today's Highlight</h5>
                </div>

                <div className='detailTemperatureOne'>
          
            <div className="detail">
              <span>Location<MdLocationOn /></span>
              <div className='detailData'>
                <span>{country},{name}</span>
              </div>
            </div>
          
            <div className="detail">
            <span>Mood</span>
              <div className='detailData'>
                <span>{weathermood}</span>
              </div>
            </div>
            
            <div className="detail">
              <span>Temp</span>
              <div className='detailMaxMin detailData'>
                <span><BsFillArrowUpCircleFill/>&nbsp;{max}</span>
                <span><BsFillArrowDownCircleFill/>&nbsp;{min}</span>  
              </div>
            </div>
                </div>
                
                <div className='detailTemperatureTwo'>
            <div className="detail">
              <span>Humidity</span>
              <div className='detailData'>
                <span>{humidity}</span>
              </div>
            </div>

            <div className="detail">
              <span>Pressure</span>
              <div className='detailData'>
                <span>{pressure}</span>
              </div>
            </div>
            
            <div className="detail">
              <span>Speed</span>
              <div  className='detailData'>
                <span>{speed} km/h</span>
              </div>
            </div>
                </div>
          </div>
    </div>
  )
}

export default Weather;