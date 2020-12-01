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

    return (
        <div>
            capital {country.capital}
            <br />
            population {country.population}
            <h3>languages</h3>
            <ul>
            {country.languages.map(language =>
                <Language language={language} />
            )}
            </ul>
            <img className="flag" src={country.flag} alt="" />
        </div>
    );
}

export default CountryData;
