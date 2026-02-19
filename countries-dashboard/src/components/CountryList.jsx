import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {countries.map((country) => (
        <CountryCard 
          key={country.cca3}
          country={country} 
          onClick={onCountryClick}
        />
      ))}
    </div>
  );
};

export default CountryList;