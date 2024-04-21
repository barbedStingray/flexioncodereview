import { useState } from 'react';
import UnitConverter from './UnitConverter';
import './App.css';


function App() {

  const [display, setDisplay] = useState(true);


  const temperatureLibrary = {
    title: 'Temperature',
    units: [
      'Celsius',
      'Fahrenheit',
      'Kelvin',
      'Rankine'
    ],
    conversions: {
      Celsius: {
        Celsius: 'x',
        Fahrenheit: '(x * 9/5) + 32',
        Kelvin: 'x + 273.15',
        Rankine: 'x * 9/5 + 491.67'
      },
      Fahrenheit: {
        Celsius: '(x - 32) * 5/9',
        Fahrenheit: 'x',
        Kelvin: '(x - 32) * 5/9 + 273.15',
        Rankine: 'x + 459.67'
      },
      Kelvin: {
        Celsius: 'x - 273.15',
        Fahrenheit: '(x - 273.15) * 9/5 + 32',
        Kelvin: 'x',
        Rankine: 'x * 1.8'
      },
      Rankine: {
        Celsius: '(x - 491.67) * 5/9',
        Fahrenheit: 'x - 459.67',
        Kelvin: 'x * 5/9',
        Rankine: 'x'
      },
    }
  };
  const volumeLibrary = {
    title: 'Volume',
    units: [
      'CubicFeet',
      'CubicInches',
      'Cups',
      'Gallons',
      'Liters',
      'Tablespoons'
    ],
    conversions: {
      CubicFeet: {
        CubicFeet: 1,
        CubicInches: 1728,
        Cups: 117.987,
        Gallons: 7.48052,
        Liters: 28.3168,
        Tablespoons: 1915.01,
      },
      CubicInches: {
        CubicFeet: 0.000578704,
        CubicInches: 1,
        Cups: 0.0682794,
        Gallons: 0.004329,
        Liters: 0.0163871,
        Tablespoons: 1.10823
      },
      Cups: {
        CubicFeet: 0.00847552,
        CubicInches: 14.6457,
        Cups: 1,
        Gallons: 0.0634013,
        Liters: 0.24,
        Tablespoons: 16.2307
      },
      Gallons: {
        CubicFeet: 0.133681,
        CubicInches: 231,
        Cups: 15.7725,
        Gallons: 1,
        Liters: 3.78541,
        Tablespoons: 256
      },
      Liters: {
        CubicFeet: 0.0353147,
        CubicInches: 61.0237,
        Cups: 4.16667,
        Gallons: 0.264172,
        Liters: 1,
        Tablespoons: 67.628
      },
      Tablespoons: {
        CubicFeet: 0.00052219,
        CubicInches: 0.902344,
        Cups: 0.0616115,
        Gallons: 0.00390625,
        Liters: 0.0147868,
        Tablespoons: 1,
      },
    }
  };




  return (
    <div className="flexionCodeReview">

      <h1>Flexion Code Reiview</h1>

      <div onClick={() => setDisplay(true)}><h3>Temperature</h3></div>
      <div onClick={() => setDisplay(false)}><h3>Volume</h3></div>

      {display ?
        <UnitConverter
          title={'Temperature'}
          library={temperatureLibrary}
        />
        :
        <UnitConverter
          title={'Volume'}
          library={volumeLibrary}
        />
      }

    </div>
  );
}

export default App;
