import { useState } from 'react'; 
import UnitConverter from './UnitConverter';
import './App.css';




function App() {

  const [temperatureUnits, setTemperatureUnits] = useState([
    'Celsius',
    'Fahrenheit', 
    'Kelvin', 
    'Rankine'
  ]);

  const [volumeUnits, setVolumeUnits] = useState([
    'Cubic-Feet', 
    'Cubic-Inches', 
    'Cups', 
    'Gallons', 
    'Liters', 
    'Tablespoons'
  ]);

  


  return (
    <div className="flexionCodeReview">

      <h1>Flexion Code Reiview</h1>

      <UnitConverter 
        title={'Temperature'}
        units={temperatureUnits}
      />

      <UnitConverter 
        title={'Volume'}
        units={volumeUnits}
      />

    </div>
  );
}

export default App;
