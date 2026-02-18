import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {countries.map((country) => (
        <CountryCard 
          key={country.cca3}
          country={country} 
        />
      ))}
    </div>
  );
};

export default CountryList;