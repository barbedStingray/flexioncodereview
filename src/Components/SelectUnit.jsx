import React from 'react';

const SelectUnit = ({ units, setFunction }) => {


    return (
        <select
            onChange={(e) => setFunction(e.target.value)}
        >
            {units.map((unit, i) => (
                <option
                    key={i}
                    value={unit}
                >{unit}</option>
            ))}
        </select>
    )
}

export default SelectUnit
