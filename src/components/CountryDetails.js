import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const selectedCountry = countries.find((country) => country.alpha3Code === id);
    setCountry(selectedCountry);
  }, [countries, id]);

  if (!country) {
    return <div>Loading...</div>;
  }

  const flagUrl = country.flags && country.flags.png ? country.flags.png : '';

  return (
    <div>
      <h2>{country.name.common}</h2>
      {flagUrl && <img src={flagUrl} alt={`Flag of ${country.name.common}`} style={{ height: '100px' }} />}
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
    </div>
  );
}

export default CountryDetails;
