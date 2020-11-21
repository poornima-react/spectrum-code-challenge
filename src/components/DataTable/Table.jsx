import React from "react";

export const TColumns = ({ columns = [] }) => {
    const columnsEl = columns.map(({id,name, minWidth}) => <th className='column' key={id} style={{minWidth}}>{name}</th>);
    return (
        <thead data-testid='thead'>
        <tr>{columnsEl}</tr>
        </thead>
    );
};

export const TBody = ({ data = [], activePage }) => {
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

    return <tbody data-testid='tbody'>{bodyEl}</tbody>;
};

export const Table = ({ columns, data, activePage }) => {
    return (
        <table data-testid='table-root'>
            <TColumns columns={columns} />
            <TBody data={data} activePage={activePage} />
        </table>
    );
};

export default Table;