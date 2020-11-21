import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import PageHeading from "./components/PageHeading/indes";
import { columns } from "./uiConfig/dataTable";
import "./App.scss";

function App({ callAPi }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        callAPi({ path: 'restaurants' })
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    console.log("something went wrong.", response.status);
                }
            })
            .catch(console.log);
    }, []);

    return (
        <div className="App">
            <PageHeading title='Restaurant List'/>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default App;
