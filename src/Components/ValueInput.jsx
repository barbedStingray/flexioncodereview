import React from 'react';


const ValueInput = ({ setFunction, value }) => {
    return (
        <input
            type='text'
            placeholder='Question'
            value={value}
            onChange={(e) => setFunction(e.target.value)}
        />
    )
}

export default ValueInput
