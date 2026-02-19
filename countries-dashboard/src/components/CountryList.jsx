import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
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