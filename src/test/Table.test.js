import React from 'react';
import {render} from '@testing-library/react';
import {Table} from '../components/DataTable/Table'
import data from '../dummyData'
import {columns} from '../uiConfig/dataTable'

describe('render Table component', () => {
    const {getByTestId} = render(<Table columns={columns} data={data}/>);
    test('test Table component', () => {
        const itemElement1 = getByTestId('table-root');
        expect(itemElement1).toBeInTheDocument();
    })
});
