import React from "react";

const Countries = ({ displayCountries }) => {
    console.log(displayCountries);
    return (
        <div>
            <h2>Results</h2>
            {displayCountries.map(country =>
                <div
                    key={country.ccn3}>
                    <h2>{country.name.common}</h2>
                    <p><strong>Capital: </strong>{country.capital}</p>
                    <ul>
                        <strong>Languages:</strong>
                        {Object.values(country.languages).map((language, index) =>
                            <li key={index}>{language}</li>
                        )}
                    </ul>
                    <img className='flag' src={country.flags.png}/>
                </div>
            )}
        </div>
    )
}

export default Countries