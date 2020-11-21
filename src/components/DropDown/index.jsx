import React from 'react';

const DropDown = ({value, options, label, onChange}) => {
    return <>
        <label>{label}</label>
        <select onChange={onChange} value={value}>
            {options.map((value) => (<option value={value}>{value}</option>))}
        </select>
    </>
}

export default DropDown;