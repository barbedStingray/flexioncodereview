import React, { useState } from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';




const UnitConverter = ({ title, units }) => {

    const [question, setQuestion] = useState('');
    // const [studentAnswer, setStudentAnswer] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [startUnit, setStartUnit] = useState('Celsius');
    const [targetUnit, setTargetUnit] = useState('Celsius');


    const volumeUnitConversions = {
        CubicFeet: {
            CubicInches: 1728,
            Cups: 117.987,
            Gallons: 7.48052,
            Liters: 28.3168,
            Tablespoons: 1915.01
        },
        CubicInches: {
            CubicFeet: 0.000578704,
            Cups: 0.0682794,
            Gallons: 0.004329,
            Liters: 0.0163871,
            Tablespoons: 1.10823
        }
    }

    // console.log('unit conversion', volumeUnitConversions['CubicFeet']['Cups'])


    function convertQuestion(e, question, startUnit, targetUnit) {
        e.preventDefault();
        console.log('checking answer', question, startUnit, targetUnit);

        const numValue = Number(question);
        const correctNumber = numValue * volumeUnitConversions[`${startUnit}`][`${targetUnit}`];
        console.log('correctAnswer', correctNumber);
        setCorrectAnswer(correctNumber);

    }
    


    return (

        <div className='unitConverter'>
            <h1>{title}</h1>

            <div>
                <form onSubmit={(e) => convertQuestion(e, question, startUnit, targetUnit)}>

                    <ValueInput
                        setFunction={setQuestion}
                        value={question}
                    />

                    <SelectUnit
                        units={units}
                        setFunction={setStartUnit}
                    />

                    <SelectUnit
                        units={units}
                        setFunction={setTargetUnit}
                    />

                    {/* <ValueInput
                        setFunction={setStudentAnswer}
                        value={studentAnswer}
                    /> */}

                    <button type='submit'>Check</button>
                    {JSON.stringify(correctAnswer)}
                </form>
            </div>
        </div>
    )
}

export default UnitConverter
