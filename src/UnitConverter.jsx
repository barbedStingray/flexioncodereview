import React, { useState } from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';




const UnitConverter = ({ title, units }) => {

    const [question, setQuestion] = useState('');
    const [studentAnswer, setStudentAnswer] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [startUnit, setStartUnit] = useState('Celsius');
    const [targetUnit, setTargetUnit] = useState('Celsius');


    const volumeUnitConversions = {
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

    const temperatureUnitConversions = {
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

    function convertTemperatures() {
        console.log('convertTemperatures', question, startUnit, targetUnit);

        // get string equation
        const stringEquation = temperatureUnitConversions[`${startUnit}`][`${targetUnit}`];
        console.log('stringEquation', stringEquation);

        // implement function() constructor
        const equationFunction = new Function('x', `return ${stringEquation}`);

        // run string function with Question value
        const correctTemp = equationFunction(Number(question));
        console.log(correctTemp);
        setCorrectAnswer(correctTemp.toFixed(1));
    }

    function convertVolumes() {
        console.log('convertVolumes', question, startUnit, targetUnit);

        const correctVolume = Number(question) * volumeUnitConversions[`${startUnit}`][`${targetUnit}`];
        console.log('correctVolume', correctVolume);
        setCorrectAnswer(correctVolume.toFixed(1));
    }

    function validateInputs() {
        console.log('validateInputs');
    }




    function submitConversion(e, question, studentAnswer, startUnit, targetUnit) {
        e.preventDefault();
        console.log('submitConversion', question, startUnit, targetUnit);


        // todo verify data accurate numbers

        console.log('stringlength', question.length);

        if (question.length === 0 && studentAnswer.length === 0) {
            console.log('inputs are not full yet');
            return

            // another if else that evaluates to true/false for function
            // verifying numerical values

        } else if (title === 'Temperature') {
            console.log('title is Temperature');

            // ! allows the box to be filled in with text
            const studentString = e.target.value;
            setStudentAnswer(studentString);

            convertTemperatures();
            return

        } else if (title === 'Volume') {
            console.log('title is Volume');

            const studentString = e.target.value;
            setStudentAnswer(studentString);

            convertVolumes();
            return

        } else {
            console.log('inputs full, run code');
            return
        }

        
    }



    return (

        <div className='unitConverter'>
            <h1>{title}</h1>

            <div>
                <form>
                    <ValueInput
                        setFunction={setQuestion}
                        value={question}
                        placeholder={'Initial Value'}
                    />

                    <SelectUnit
                        units={units}
                        setFunction={setStartUnit}
                    />

                    <SelectUnit
                        units={units}
                        setFunction={setTargetUnit}
                    />

                    <input
                        type='text'
                        placeholder='studentAnswer'
                        value={studentAnswer}
                        onChange={(e) => submitConversion(e, question, studentAnswer, startUnit, targetUnit)}
                    />
                    {/* !! Not sure why I can't component this !! */}
                    {/* <ValueInput
                        setFunction={submitConversion}
                        value={studentAnswer}
                        placeholder={'Student Answer'}
                    /> */}

                    {JSON.stringify(correctAnswer)}
                    {JSON.stringify(studentAnswer)}

                    {/* <button type='submit'>Check</button> */}


                    {studentAnswer === correctAnswer ?
                        (<div><p>Correct</p></div>)
                        :
                        (<div><p>NO</p></div>)
                    }

                </form>
            </div>
        </div>
    )
}

export default UnitConverter
