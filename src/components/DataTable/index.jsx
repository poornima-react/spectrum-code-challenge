import React, {useEffect, useState} from "react";
import Pagination from "../Pagination/index";
import "./index.scss";

const TColumns = ({ columns = [] }) => {
    const columnsEl = columns.map(({id,name, minWidth}) => <th key={id} style={{minWidth}}>{name}</th>);
    return (
        <thead>
        <tr>{columnsEl}</tr>
        </thead>
    );
};

const TBody = ({ data = [] }) => {
    const bodyEl = data.map((row) => (
        <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.city}</td>
            <td>{row.state}</td>
            <td>{row.telephone}</td>
            <td>{row.genre}</td>
        </tr>
    ));

    return <tbody>{bodyEl}</tbody>;
};

const Table = ({ columns, data }) => {
    return (
        <table>
            <TColumns columns={columns} />
            <TBody data={data} />
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
        <div className="data-table-root">
            <Table columns={columns} data={list}/>
            <Pagination totalItemsCount={data.length} onPageChange={onPageChange} />
        </div>
    );
};

export default DataTable;
