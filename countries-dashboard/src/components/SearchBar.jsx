import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="bg-white shadow-md rounded-lg flex items-center px-6 py-4 w-full md:w-96 text-gray-500">
            <span className="mr-3 text-lg">🔍</span>
            <input 
                type="text" 
                placeholder="Buscar país (inglés)..." 
                className="w-full focus:outline-none text-gray-700 placeholder-gray-400 font-medium"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;