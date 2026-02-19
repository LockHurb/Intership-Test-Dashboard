import React from 'react';

const RegionFilter = ({ onSelectRegion }) => {
    return (
        <div className="relative w-48">
            <select 
                onChange={(e) => onSelectRegion(e.target.value)}
                className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg px-6 py-4 text-gray-700 dark:text-white font-medium focus:outline-none cursor-pointer appearance-none transition-colors duration-300"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: `right 1rem center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `1.5em 1.5em`
                }}
            >
                <option value="">Todas las regiones</option>
                <option value="Africa">África</option>
                <option value="Americas">América</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
            </select>
        </div>
    );
};

export default RegionFilter;