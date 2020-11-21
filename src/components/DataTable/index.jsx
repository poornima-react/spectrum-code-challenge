import React from "react";
import "./index.scss";

const TColumns = ({ columns = [] }) => {
    const columnsEl = columns.map((column) => <th key={column.id}>{column.name}</th>);
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

const DataTable = ({ columns, data }) => {
    return (
        <div className="data-table-root">
            <Table columns={columns} data={data} />
        </div>
    );
};

export default DataTable;
