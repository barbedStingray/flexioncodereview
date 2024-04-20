import React from 'react';

const SelectUnit = ({ units, keyPair, setFunction }) => {


    return (
        <select
            onChange={(e) => setFunction(`${keyPair}`)(e)}
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
