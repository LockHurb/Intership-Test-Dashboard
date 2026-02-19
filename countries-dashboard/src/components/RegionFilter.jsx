import React from 'react';

const RegionFilter = ({ onSelectRegion }) => {
    
    return (

        <div style={{ margin: '20px 0'}}>
            <select onChange={(e) => onSelectRegion(e.target.value)}>
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