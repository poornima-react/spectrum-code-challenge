import React, {useEffect, useState} from "react";
import Pagination from "../Pagination/index";
import SearchInput from "../SearchInput";
import DropDown from "../DropDown";
import "./index.scss";

const TColumns = ({ columns = [] }) => {
    const columnsEl = columns.map(({id,name, minWidth}) => <th className='column' key={id} style={{minWidth}}>{name}</th>);
    return (
        <thead>
        <tr>{columnsEl}</tr>
        </thead>
    );
};

const TBody = ({ data = [], activePage }) => {
    const bodyEl = data.map((row, i) =>{
        const sNo = (activePage * 10) + (i + 1) - 10;
        return (
        <tr key={row.id}>
            <td>{sNo}</td>
            <td>{row.name}</td>
            <td>{row.city}</td>
            <td>{row.state}</td>
            <td>{row.telephone}</td>
            <td>{row.genre}</td>
        </tr>
    )}
    );

    return <tbody>{bodyEl}</tbody>;
};

const Table = ({ columns, data, activePage }) => {
    return (
        <table>
            <TColumns columns={columns} />
            <TBody data={data} activePage={activePage} />
        </table>
    );
};

const DataTable = ({columns, data = []}) => {
    const [list, setList] = useState(data);
    const [activePage, setActivePage] = useState(1);
    const [query, setQuery] = useState('');
    const [uniqueStates, setUniqueStates] = useState([]);
    const [error, showError] = useState(false);
    const [totalItemsCount, setTotalItemsCount] = useState(false);
    const [state, setState] = useState('');


    const setPageData = (activePage, data) => {
        const start = (activePage * 10) - 10;
        const end = activePage * 10;
        const list = data.slice(start, end);
        setList(list);
    }

    useEffect(() => {
        const uniqueStates = [];
        data.forEach((restaurant) => {
            if (!uniqueStates.includes(restaurant.state)) {
                uniqueStates.push(restaurant.state);
            }
        });
        uniqueStates.unshift('All');
        setUniqueStates(uniqueStates);
        setPageData(activePage, data);
        setTotalItemsCount(data.length);
    }, [data]);

    const onPageChange = (currentPageNumber) =>{
        setActivePage(currentPageNumber);
        setPageData(currentPageNumber, data);
    }

    const onQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (!value) {
            showError(false);
            setPageData(1, data);
            setTotalItemsCount(data.length);
            setState('All');
        }
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            queryData();
        }
    }

    const queryData = () => {
        const text = query.toLowerCase();
        if (!!query.length) {
            const filteredData = data.filter(({name, city, genre}) => (name.toLowerCase().includes(text) || city.toLowerCase().includes(text) || genre.toLowerCase().includes(text)));
            if (!!filteredData.length) {
                setActivePage(1);
                setPageData(1, filteredData);
                setTotalItemsCount(filteredData.length);
            } else {
                showError(true);
            }
        }
    }

    const onDropDownChange = (e) => {
        const state = e.target.value;
        setState(state);
        if (state == 'All') {
            setActivePage(1);
            setPageData(1, data);
            setTotalItemsCount(data.length);
            setQuery('');
        } else {
            const filteredData = data.filter((restaurant) => restaurant.state == state);
            if (!!filteredData.length) {
                setActivePage(1);
                setPageData(1, filteredData);
                setTotalItemsCount(filteredData.length);
            }
        }
    }

    return (
        <div>
            <DropDown value={state} label='State' options={uniqueStates} onChange={onDropDownChange}/>
            <SearchInput value={query} onChange={onQueryChange} onEnter={onEnter}/>
            {
                error ? <h1>No results were found.</h1> :
                    <div className="data-table-root">
                        <Table columns={columns} data={list} activePage={activePage}/>
                        <Pagination activePage={activePage} totalItemsCount={totalItemsCount} onPageChange={onPageChange}/>
                    </div>
            }
        </div>
    );
};

export default DataTable;
