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
    <div className="pt-10 pb-20 text-gray-900 dark:text-white">
      <button 
        onClick={onBack} 
        className="bg-white dark:bg-gray-800 shadow-md px-8 py-2 rounded mb-16 hover:shadow-lg transition-all flex items-center gap-2 text-gray-800 dark:text-white"
      >
        &larr; Back
      </button>

      <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
        <img src={country.flags.svg} alt={country.name.common} className="w-full max-w-lg shadow-lg" />

        <div className="w-full py-4">
          <h2 className="font-extrabold text-3xl mb-8">{country.name.common}</h2>

          <div className="flex flex-col md:flex-row gap-16 mb-8">
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong className="font-semibold text-gray-900 dark:text-white">Native Name:</strong> {nativeName}</p>
              <p><strong className="font-semibold text-gray-900 dark:text-white">Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong className="font-semibold text-gray-900 dark:text-white">Region:</strong> {country.region}</p>
              <p><strong className="font-semibold text-gray-900 dark:text-white">Sub Region:</strong> {country.subregion}</p>
              <p><strong className="font-semibold text-gray-900 dark:text-white">Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
            
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong className="font-semibold text-gray-900 dark:text-white">Top Level Domain:</strong> {country.tld ? country.tld[0] : 'N/A'}</p>
              <p><strong className="font-semibold text-gray-900 dark:text-white">Currencies:</strong> {currencies}</p>
              <p><strong className="font-semibold text-gray-900 dark:text-white">Languages:</strong> {languages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;