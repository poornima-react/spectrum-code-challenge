import React from 'react';
import './index.scss';

const SearchInput = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i className="fa fa-search"></i></button>
        </div>
    );
}


export default SearchInput;