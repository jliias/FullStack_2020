import React from 'react';
import Country from './Country';

const Countries = ({showCountries, FilterCountries, showButton}) => {

    return (
        <div>
            {showCountries.map((country, index) =>
                <Country country={country} FilterCountries={FilterCountries} showButton={showButton} key={index}/>
            )}
        </div>
    );
}

export default Countries;