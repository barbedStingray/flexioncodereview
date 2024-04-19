import React, { useState } from 'react';




const UnitConverter = ({ title, units }) => {

    


  return (

    <div className='unitConverter'>
        <h1>{title}</h1>

        <div>
            <input type='text' placeholder='Question' />

            <select>
                {units.map((unit, i) => (
                    <option key={i} value={unit}>{unit}</option>
                ))}
            </select>
            <select>
                {units.map((unit, i) => (
                    <option key={i} value={unit}>{unit}</option>
                ))}
            </select>

            <input type='text' placeholder='Student Answer' />

        </div>
      
    </div>
  )
}

export default UnitConverter
