import React from 'react';

const SearchBar = ({ onSearch }) => {

    return (

        <div style={{ margin: '20px 0'}}>
            <input 
                type="text" 
                placeholder="Buscar país..." 
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>

    );

};

export default SearchBar;