import React from 'react';


const ValueInput = ({ setFunction, value, placeholder }) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFunction(e.target.value)}
        />
    )
}

export default ValueInput
