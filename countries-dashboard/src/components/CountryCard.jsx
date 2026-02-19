import React from 'react';

const CountryCard = ({ country, onClick }) => {
    return (
        <article onClick={() => onClick(country)} className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Imagen de bandera */}
        <img src={country.flags.png} alt={`Bandera de ${country.name.common}`} className="w-full h-40 object-cover"
        />

        <h3 className="font-extrabold text-lg pt-6 px-6 pb-2">{country.name.common}</h3>
        
        <div className="px-6 pb-6 text-sm text-gray-700">
            <p className="mb-1"><strong className="font-semibold text-gray-900">Población:</strong> {country.population.toLocaleString()}</p>
            <p className="mb-1"><strong className="font-semibold text-gray-900">Región:</strong> {country.region}</p>
            <p className="mb-1"><strong className="font-semibold text-gray-900">Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
        </article>
  );
};

export default CountryCard;