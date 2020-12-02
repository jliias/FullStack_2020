import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './Components/Countries';
import SearchForm from './Components/SearchForm';
import CountryData from './Components/CountryData';
import WeatherData from './Components/WeatherData';

const api_key = process.env.REACT_APP_API_KEY

console.log(api_key);

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [showCountries, setShowCountries] = useState([''])

  // Get list of countries
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setShowCountries(response.data)
      })
  }, [])

  const FilterCountries = (filter) => {
    console.log("FILTER: ", filter);
    console.log(filter.toLowerCase())
    let tmpList = []
    countries.forEach(function (item, index, array) {
      if (item.name.toLowerCase().includes(filter.toLowerCase())) {
        console.log(item.name.toLowerCase());

        tmpList.push(item);
      }
    })
    setShowCountries(tmpList);
  }

  const numberOfCountries = showCountries.length;

  return (
    <div>
      <SearchForm
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        FilterCountries={FilterCountries}
      />

      {numberOfCountries > 10 &&
        <div> Too many matches, specify another filter</div>
      }
      {numberOfCountries <= 10 && numberOfCountries > 1 &&
        <div>
          <Countries showCountries={showCountries} FilterCountries={FilterCountries} showButton={true}/>
        </div>
      }
      {numberOfCountries === 1 &&
        <div>
          <h2><Countries showCountries={showCountries} showButton={false}/></h2>
          <CountryData country={showCountries[0]} />
          <WeatherData city={showCountries[0].capital} api_key={api_key}/>
        </div>
      }
      {numberOfCountries === 0 &&
        <div> not found! </div>
      }
    </div>
  )

}

export default App 