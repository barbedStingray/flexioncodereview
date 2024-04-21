import React from 'react';

const SelectUnit = ({ units, keyPair, setFunction, value }) => {

    return (
        <select
            name={keyPair}
            onChange={(e) => setFunction(e)}
            value={value}
        >
            <option value={''}>
                Select Unit
            </option>
            {units.map((unit, i) => (
                <option key={i} value={unit}>
                    {unit}
                </option>
            ))}
        </select>
    )
}

export default SelectUnit
