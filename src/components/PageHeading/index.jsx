import React from 'react';
import './index.scss';

const PageHeading = ({title = 'Page Title'}) => {
    return (
        <h2 data-testid='page-heading-test' className='page-heading'>{title}</h2>
    )
}

export default PageHeading;