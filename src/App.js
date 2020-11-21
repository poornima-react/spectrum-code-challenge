import React from 'react';
import DataTable from "./components/DataTable";
import {columns} from "./uiConfig/dataTable";
import './App.scss';

const dummyData = [{
    "id": "509f8ddf-c999-44ba-967e-406585895bbb",
    "name": "Mama's Fish House",
    "address1": "799 Poho Pl",
    "city": "Paia",
    "state": "HI",
    "zip": "96779",
    "lat": "20.929148",
    "long": "-156.366996",
    "telephone": "(808) 579-8488",
    "tags": "Social,Food and Dining,Restaurants",
    "website": "http://www.mamasfishhouse.com",
    "genre": "Seafood",
    "hours": "Open Daily 11:00 AM-9:00 PM",
    "attire": "casual"
},
    {
        "id": "509f8ddf-c999-44ba-967e-406585895bb",
        "name": "Mama's Fish House",
        "address1": "799 Poho Pl",
        "city": "Paia",
        "state": "HI",
        "zip": "96779",
        "lat": "20.929148",
        "long": "-156.366996",
        "telephone": "(808) 579-8488",
        "tags": "Social,Food and Dining,Restaurants",
        "website": "http://www.mamasfishhouse.com",
        "genre": "Seafood",
        "hours": "Open Daily 11:00 AM-9:00 PM",
        "attire": "casual"
    },
    {
        "id": "509f8ddf-c999-44ba-967e-40658585bbb",
        "name": "Mama's Fish House",
        "address1": "799 Poho Pl",
        "city": "Paia",
        "state": "HI",
        "zip": "96779",
        "lat": "20.929148",
        "long": "-156.366996",
        "telephone": "(808) 579-8488",
        "tags": "Social,Food and Dining,Restaurants",
        "website": "http://www.mamasfishhouse.com",
        "genre": "Seafood",
        "hours": "Open Daily 11:00 AM-9:00 PM",
        "attire": "casual"
    }
];

function App() {
  return (
    <div className="App">
        <DataTable columns={columns} data={dummyData}/>
    </div>
  );
}

export default App;
