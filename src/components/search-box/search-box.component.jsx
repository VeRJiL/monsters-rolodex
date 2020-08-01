import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeHolder, handlechange }) => (
    <input 
        className="search"
        type="search" 
        placeholder={ placeHolder } 
        onChange={ handlechange } 
    />
);