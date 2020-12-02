import React from 'react';
import './CountryData.css';

const Language = ({ language }) => {
    return (
        <div>
            <li>{language.name}</li>
        </div>
    );
}

const CountryData = ({ country }) => {

    // Need to check if data is valid, otherwise in first
    // render there will be problems with languages.map
    const dataValid = country ? true : false;

    return (
        <div>
            capital {country.capital}
            <br />
            population {country.population}
            <h3>languages</h3>
            <ul>
                {dataValid && country.languages.map((language, index) =>
                    <Language language={language} key={index} />
                )}
            </ul>
            <img className="flag" src={country.flag} alt="" />
        </div>
    );
}

export default CountryData;
