import React from 'react';
import './index.scss';

const SearchInput = ({onChange, onEnter}) => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search.." name="search" onChange={onChange} onKeyDown={onEnter}/>
            <button onClick={(e)=>{e.key = 'Enter'; onEnter(e)}} type="submit"><i className="fa fa-search"></i></button>
        </div>
    );
}


export default SearchInput;