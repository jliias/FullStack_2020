import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './Components/Countries';
import SearchForm from './Components/SearchForm';
import CountryData from './Components/CountryData';

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

  const numberOfCountries = showCountries.length;


  return (
    <div>
      <SearchForm
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        countries={countries}
        setShowCountries={setShowCountries}
      />

      {numberOfCountries > 10 &&
        <div> Too many matches, specify another filter</div>
      }
      {numberOfCountries <= 10 && numberOfCountries > 1 &&
        <Countries showCountries={showCountries} />
      }
      {numberOfCountries === 1 &&
        <div>
          <h2><Countries showCountries={showCountries} /></h2>

          <CountryData country={showCountries[0]} />

        </div>
      }
      {numberOfCountries === 0 &&
        <div> not found! </div>
      }
    </div>
  )

}

export default App 