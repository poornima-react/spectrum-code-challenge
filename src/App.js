import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import PageHeading from "./components/PageHeading";
import { columns } from "./uiConfig/dataTable";
import "./App.scss";

function App({ callAPi }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        callAPi({ path: 'restaurants' })
            .then((response) => {
                if (response.status === 200) {
                    response.data.sort(function(a, b){
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    });
                    setData(response.data);
                } else {
                    console.log("something went wrong.", response.status);
                }
            })
            .catch(console.log);
    }, []);

    return (
        <div data-testid='root-app' className="App">
            <PageHeading title='Restaurant List'/>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default App;
