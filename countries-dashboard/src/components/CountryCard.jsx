import React from 'react';

const CountryCard = ({ country, onClick }) => {
    return (
        <article onClick={() => onClick(country)} style={{ 
        border: '1px solid #ccc', 
        padding: '10px', 
        borderRadius: '8px',
        cursor: 'pointer'
}}>
        {/* Imagen de bandera */}
        <img src={country.flags.png} alt={`Bandera de ${country.name.common}`} style={{ width: '100px', height: 'auto' }}
        />

        <h3>{country.name.common}</h3>
        
        <div>
            <p><strong>Población:</strong> {country.population}</p>
            <p><strong>Región:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
        </article>
  );
};

export default CountryCard;