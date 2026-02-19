import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center px-6 py-4 w-full md:w-96 text-gray-500 dark:text-gray-300 transition-colors duration-300">
            <span className="mr-3 text-lg">🔍</span>
            <input 
                type="text" 
                placeholder="Buscar país (inglés)..." 
                className="w-full focus:outline-none text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium bg-transparent"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;