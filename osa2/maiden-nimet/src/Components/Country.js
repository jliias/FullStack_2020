import React from 'react';

const Country = ({ country, FilterCountries, showButton }) => {
    console.log("");
    return (
        <div>
            {country.name}
            {showButton &&
                <button onClick={() => FilterCountries(country.name)}>show</button>
            }
        </div>
    );
}

export default Country;