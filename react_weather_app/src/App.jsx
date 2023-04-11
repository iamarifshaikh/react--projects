import { useEffect, useState } from 'react'
import './Styles/App.css'
import Weather from './Components/Weather';

function App() {
  const [searchTerm, setSearchTerm] = useState("Pune");
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async() => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=67574866d517ff4fcd6eede40b2b1d14&units=metric`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp,humidity,pressure,temp_max:max,temp_min:min } = data.main;
      const { country,sunset } = data.sys;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      console.log(data);

      const officialWeatherInfo = { temp, humidity, pressure, country, sunset, weathermood, name, speed, max,min };

      setWeatherInfo(officialWeatherInfo);
      
    } catch(error) {
      alert("Something Went Wrong");
    }

    useEffect(() => {
      getWeatherInfo();
    }, []);
  };

  return (
    <div className="App">
      <Weather
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        weatherInfo={weatherInfo}
        setWeatherInfo={setWeatherInfo}
        getWeatherInfo={getWeatherInfo}
      />
    </div>
  )
}

export default App
