import React from 'react';
import {render} from '@testing-library/react';
import PageHeading from '../components/PageHeading';

describe('render PageHeading component', () => {
    const {getByTestId} = render(<PageHeading />);
    test('test PageHeading component', () => {
        const itemElement1 = getByTestId('page-heading-test');
        expect(itemElement1).toBeInTheDocument();
    })
});
