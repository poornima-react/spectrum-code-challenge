import React from 'react';

const DropDown = ({value, options, label, onChange}) => {
    return <>
        <label>{label}</label>
        <select onChange={onChange} value={value} data-testid='dropdown-test'>
            {options.map((value, key) => (<option key={key+''} value={value}>{value}</option>))}
        </select>
    </>
}

export default DropDown;