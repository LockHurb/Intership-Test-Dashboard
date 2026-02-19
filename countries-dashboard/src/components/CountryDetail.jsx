import React from 'react';

const CountryDetail = ({ country, onBack }) => {

  const nativeName = country.name.nativeName 
    ? Object.values(country.name.nativeName)[0].common 
    : country.name.common;

  const currencies = country.currencies 
    ? Object.values(country.currencies).map(c => c.name).join(', ')
    : 'N/A';

  const languages = country.languages 
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={onBack} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        &larr; Back
      </button>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Imagen de bandera */}
        <img src={country.flags.svg} alt={country.name.common} style={{ width: '400px', maxWidth: '100%', height: 'auto' }} />

        <div>
          <h2>{country.name.common}</h2>

          <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
            <div>
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
            
            <div>
              <p><strong>Top Level Domain:</strong> {country.tld ? country.tld[0] : 'N/A'}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;