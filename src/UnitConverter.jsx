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
        Fahrenheit: {
            
        }
    }


    // todo verify data accurate numbers


    function submitConversion(e, question, startUnit, targetUnit) {
        e.preventDefault();
        console.log('checking answer', question, startUnit, targetUnit);

        // Student Number convert
        const studentNum = Number(e.target.value);
        setStudentAnswer(e.target.value);





        // question conversion begins
        const numValue = Number(question);
        // todo if statement volume vs Temperature
        const correctNumber = numValue * volumeUnitConversions[`${startUnit}`][`${targetUnit}`];
        setCorrectAnswer(correctNumber.toFixed(2));
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
                        onChange={(e) => submitConversion(e, question, startUnit, targetUnit)}
                    />
                    {/* <ValueInput
                        setFunction={submitConversion}
                        value={studentAnswer}
                        placeholder={'Student Answer'}
                    /> */}

                    {JSON.stringify(correctAnswer)}

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
