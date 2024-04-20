import React from 'react';


const ValueInput = ({ setFunction, keyPair, value, placeholder }) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFunction(`${keyPair}`)(e)}
        />
    )
}

export default ValueInput
