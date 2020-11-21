import React from 'react';
import {render} from '@testing-library/react';
import DropDown from '../components/DropDown/index';

const onChange = () => {

}

describe('render DropDown component', () => {
    const {getByTestId} = render(<DropDown value='All' label='State' options={[1,2,3,4]} onChange={onChange}/>);
    test('test DropDown component', () => {
        const itemElement1 = getByTestId('dropdown-test');
        expect(itemElement1).toBeInTheDocument();
    })
});
