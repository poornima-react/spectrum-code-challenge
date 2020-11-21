import React, {useEffect, useState} from "react";
import Pagination from "../Pagination/index";
import SearchInput from "../SearchInput";
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

    const setPageData = (activePage, data) => {
        const start = (activePage * 10) - 10;
        const end = activePage * 10;
        const list = data.slice(start, end);
        setList(list);
    }

    useEffect(() => {
        setPageData(activePage, data);
    }, [data]);

    const onPageChange = (currentPageNumber) =>{
        setActivePage(currentPageNumber);
        setPageData(currentPageNumber, data);
    }

    return (
        <div>
            <SearchInput/>
            <div className="data-table-root">
                <Table columns={columns} data={list} activePage={activePage}/>
                <Pagination totalItemsCount={data.length} onPageChange={onPageChange}/>
            </div>
        </div>
    );
};

export default DataTable;
