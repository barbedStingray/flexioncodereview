import React from 'react';


const ValueInput = ({ setFunction, keyPair, value, placeholder }) => {

    return (
        <input
            name={keyPair}
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFunction(e)}
        />
    )
}

export default ValueInput
