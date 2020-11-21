import React, {useState} from 'react';
import Pagination from "react-js-pagination";

const PaginationWrapper = ({activePage = 1, totalItemsCount, onPageChange}) => {
    const onChange = (currentPageNumber) => {
        if(typeof onPageChange === 'function'){
            onPageChange(currentPageNumber)
        }
    }

    return (
        <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={onChange}
        />
    )
}

export default PaginationWrapper;