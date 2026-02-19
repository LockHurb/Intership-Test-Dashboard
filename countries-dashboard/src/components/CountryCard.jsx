import React from 'react';

const CountryCard = ({ country, onClick }) => {
    return (
        <article 
            onClick={() => onClick(country)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <img 
                src={country.flags.png} 
                alt={`Bandera de ${country.name.common}`} 
                className="w-full h-40 object-cover"
            />

            <div className="p-6 pb-8 text-gray-900 dark:text-white">
                <h3 className="font-extrabold text-lg mb-4">{country.name.common}</h3>
                
                <div className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Population: </span>
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Region: </span>
                        {country.region}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Capital: </span>
                        {country.capital ? country.capital[0] : 'N/A'}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default CountryCard;