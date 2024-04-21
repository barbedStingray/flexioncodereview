import React, { useEffect, useState } from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';



const UnitConverter = ({ title, library }) => {

    const [correctAnswer, setCorrectAnswer] = useState('');
    const [questionInputs, setQuestionInputs] = useState({
        promptNum: '',
        studentAnswer: '',
        startUnit: '',
        targetUnit: ''
    });


    const unitConversions = library.conversions;
    const selectUnits = library.units;

    function convertTemperatures() {
        console.log('convertTemperatures', questionInputs.promptNum, questionInputs.startUnit, questionInputs.targetUnit);
        const startUnit = questionInputs.startUnit;
        const targetUnit = questionInputs.targetUnit;
        const promptNum = questionInputs.promptNum;
        // get string equation
        const stringEquation = unitConversions[`${startUnit}`][`${targetUnit}`];
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

        const correctVolume = Number(promptNum) * unitConversions[`${startUnit}`][`${targetUnit}`];
        console.log('correctVolume', correctVolume);
        setCorrectAnswer(correctVolume.toFixed(1));
    }

    function validateInputs(str) {
        return !isNaN(Number(str));
    }

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        // console.log('e', e.target);
        // console.log('name', name);
        // console.log('value', value);
        setQuestionInputs({ ...questionInputs, [name]: value })
    }

    function submitConversion(e, promptNum, studentAnswer, startUnit, targetUnit) {
        e.preventDefault();
        console.log('submitConversion', promptNum, studentAnswer, startUnit, targetUnit);

        // ! allows the input box to be filled in with text
        const studentString = e.target.value;
        setQuestionInputs({ ...questionInputs, ['studentAnswer']: studentString });

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

            // testConvertTemperatures(promptNum, startUnit, targetUnit, unitConversions, setCorrectAnswer);
            convertTemperatures();
            return

        } else if (title === 'Volume') {
            console.log('title is Volume');

            // testConvertVolumes(promptNum, startUnit, targetUnit, unitConversions, setCorrectAnswer);
            convertVolumes();
            return

        } else {
            console.log('something fishy is going on here...');
            return
        }
    }

    useEffect(() => {
        console.log(title);
        if (title === 'Temperature') {
            setQuestionInputs({
                promptNum: '',
                studentAnswer: '',
                startUnit: 'Celsius',
                targetUnit: 'Celsius'
            });
        } else if (title === 'Volume') {
            setQuestionInputs({
                promptNum: '',
                studentAnswer: '',
                startUnit: 'CubicFeet',
                targetUnit: 'CubicFeet'
            });
        }
    }, [title]);




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
                        units={selectUnits}
                        value={questionInputs.startValue}
                        keyPair={'startUnit'}
                        setFunction={handleInputChanges}
                    />
                    <SelectUnit
                        units={selectUnits}
                        keyPair={'targetUnit'}
                        setFunction={handleInputChanges}
                    />
                    <input
                        name={'studentAnswer'}
                        type='text'
                        placeholder='studentAnswer'
                        value={questionInputs.studentAnswer}
                        onChange={(e) => submitConversion(e, questionInputs.promptNum, questionInputs.startUnit, questionInputs.targetUnit)}
                    />

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