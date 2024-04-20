import { useState } from 'react';
import UnitConverter from './UnitConverter';
import './App.css';




function App() {

  const [display, setDisplay] = useState(true);

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [startUnit, setStartUnit] = useState('Celsius');
  const [targetUnit, setTargetUnit] = useState('Celsius');

  const [questionInputs, setQuestionInputs] = useState({
    promptNum: '',
    studentAnswer: '',
    // correctAnswer: '',
    startUnit: '',
    targetUnit: ''
  })


  const [temperatureUnits, setTemperatureUnits] = useState([
    'Celsius',
    'Fahrenheit',
    'Kelvin',
    'Rankine'
  ]);

  const [tempTestLibrary, setTempTestLibrary] = useState({
    Title: 'Temperature',
    Units: [
      'Celsius',
      'Fahrenheit',
      'Kelvin',
      'Rankine'
    ],
    Conversions: {
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
  });



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
          correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer}
          questionInputs={questionInputs} setQuestionInputs={setQuestionInputs}
          tempTestLibrary={tempTestLibrary}
        />
        :
        <UnitConverter
          title={'Volume'}
          units={volumeUnits}
          questionInputs={questionInputs} setQuestionInputs={setQuestionInputs}
          correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer}
        />
      }


    </div>
  );
}

export default App;
