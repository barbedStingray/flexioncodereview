import { useState } from 'react';
import UnitConverter from './UnitConverter';
import './App.css';




function App() {

  const [display, setDisplay] = useState(false);

  const [temperatureUnits, setTemperatureUnits] = useState([
    'Celsius',
    'Fahrenheit',
    'Kelvin',
    'Rankine'
  ]);

  const [volumeUnits, setVolumeUnits] = useState([
    'CubicFeet',
    'CubicInches',
    'Cups',
    'Gallons',
    'Liters',
    'Tablespoons'
  ]);


  // CONVERSIONS


// function logic here

  return (
    <div className="flexionCodeReview">

      <h1>Flexion Code Reiview</h1>

      <div onClick={() => setDisplay(true)}><h3>Temperature</h3></div>
      <div onClick={() => setDisplay(false)}><h3>Volume</h3></div>

      {display ?
        <UnitConverter
          title={'Temperature'}
          units={temperatureUnits}
        />
        :
        <UnitConverter
          title={'Volume'}
          units={volumeUnits}
        />
      }


    </div>
  );
}

export default App;
