import React, { useEffect, useState } from 'react';
import Earth from './assets/earthglobe.png'
import './App.css';

const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = () => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryData(data);
      });
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className='myApp'>Know Your Planet &nbsp;<img src={Earth} alt=""/></div>
      <input type="search" placeholder='All the informations are here...' className='searchBox' />
      <div className='template'>{countryData.map((val, key) => {
        return (
          <div key={key} className='countryData'>
            <div className='image'>
              <img src={val.flag} alt={val.name} />
              </div>
            <h5>{val.name}</h5>
            <div className='countryInfo'>
            <span>Dialing Code: +{val.callingCodes}</span>
            <span>Native Name: {val.nativeName}</span>
            <span>Capital City: {val.capital}</span>
            <span>Regions: {val.region}</span>
            <span>Population: {val.population}</span>
            </div>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
