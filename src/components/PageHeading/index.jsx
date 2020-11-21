import React from 'react';
import './index.scss';

const PageHeading = ({title = 'Page Title'}) => {
    return (
        <h2 className='page-heading'>{title}</h2>
    )
}

export default PageHeading;