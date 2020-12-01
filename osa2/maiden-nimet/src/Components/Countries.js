import React from 'react';
import Country from './Country';

const Countries = ({showCountries}) => {

    return (
        <div>
            {showCountries.map(country =>
                <Country country={country} key={country.name}/>
            )}
        </div>
    );
}

export default Countries;