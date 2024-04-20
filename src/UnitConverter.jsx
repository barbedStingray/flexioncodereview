import React from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';




const UnitConverter = ({
    title, units,
    correctAnswer, setCorrectAnswer,
    questionInputs, setQuestionInputs }) => {


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
        console.log('convertTemperatures', questionInputs.promptNum, questionInputs.startUnit, questionInputs.targetUnit);
        const startUnit = questionInputs.startUnit;
        const targetUnit = questionInputs.targetUnit;
        const promptNum = questionInputs.promptNum;
        // get string equation
        const stringEquation = temperatureUnitConversions[`${startUnit}`][`${targetUnit}`];
        console.log('stringEquation', stringEquation);

        // implement function() constructor
        const equationFunction = new Function('x', `return ${stringEquation}`);

        // run string function with Question value
        const correctTemp = equationFunction(Number(promptNum));
        console.log(correctTemp);

        // return correctTemp;
        setCorrectAnswer(correctTemp.toFixed(1));
    }

    function convertVolumes() {
        console.log('convertVolume', questionInputs.promptNum, questionInputs.startUnit, questionInputs.targetUnit);
        const startUnit = questionInputs.startUnit;
        const targetUnit = questionInputs.targetUnit;
        const promptNum = questionInputs.promptNum;

        const correctVolume = Number(promptNum) * volumeUnitConversions[`${startUnit}`][`${targetUnit}`];
        console.log('correctVolume', correctVolume);
        setCorrectAnswer(correctVolume.toFixed(1));
    }

    function validateInputs(str) {
        return !isNaN(Number(str));
    }

    const handleInputChanges = (key) => (e) => {
        setQuestionInputs({ ...questionInputs, [key]: e.target.value })
    }

    function submitConversion(e, promptNum, studentAnswer, startUnit, targetUnit) {
        e.preventDefault();
        console.log('submitConversion', promptNum, studentAnswer, startUnit, targetUnit);

        // ! allows the input box to be filled in with text
        const studentString = e.target.value;
        setQuestionInputs({ ...questionInputs, ['studentAnswer']: studentString });
        // setStudentAnswer(studentString);

        // if either return false, function will cease
        const firstInput = validateInputs(promptNum);
        const secondInput = validateInputs(studentString);


        if (promptNum.length === 0) {
            console.log('inputs are not full yet');
            return

        } else if (firstInput === false || secondInput === false) {
            console.log('im sorry, check your inputs');
            return

        } else if (title === 'Temperature') {
            console.log('title is Temperature');

            convertTemperatures();
            return

        } else if (title === 'Volume') {
            console.log('title is Volume');

            convertVolumes();
            return

        } else {
            console.log('something fishy is going on here...');
            return
        }


    }




    return (

        <div className='unitConverter'>
            <h1>{title}</h1>

            {JSON.stringify(questionInputs)}

            <div>
                <form>
                    <ValueInput
                        setFunction={handleInputChanges}
                        keyPair={'promptNum'}
                        value={questionInputs.promptNum}
                        placeholder={'Initial Value'}
                    />

                    <SelectUnit
                        units={units}
                        keyPair={'startUnit'}
                        setFunction={handleInputChanges}
                    />
                    <SelectUnit
                        units={units}
                        keyPair={'targetUnit'}
                        setFunction={handleInputChanges}
                    />
                    <input
                        type='text'
                        placeholder='studentAnswer'
                        value={questionInputs.studentAnswer}
                        onChange={(e) => submitConversion(e, questionInputs.promptNum, questionInputs.studentAnswer, questionInputs.startUnit, questionInputs.targetUnit)}
                    />


                    {/* !! Not sure why I can't component this !! */}
                    {/* <ValueInput
                        setFunction={submitConversion}
                        value={studentAnswer}
                        placeholder={'Student Answer'}
                    /> */}

                    {JSON.stringify(correctAnswer)}
                    {JSON.stringify(questionInputs.studentAnswer)}

                </form>

                {questionInputs.studentAnswer === correctAnswer ?
                    (<div><p>Correct</p></div>)
                    :
                    (<div><p>NO</p></div>)
                }


            </div>
        </div>
    )
}

export default UnitConverter
