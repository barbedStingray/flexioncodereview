import React, { useEffect, useState } from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';
import { PiArrowsDownUpBold } from "react-icons/pi";



const UnitConverter = ({ library }) => {

    const { title, conversions, units, minimums } = library;
    const [screenDisplay, setScreenDisplay] = useState(''); // user feedback
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [questionInputs, setQuestionInputs] = useState({
        promptNum: '',
        studentAnswer: '',
        startUnit: '',
        targetUnit: ''
    });


    // master function
    function submitConversion(e, promptNum, startUnit, targetUnit) {
        e.preventDefault();

        // handle the input change
        const studentString = e.target.value;
        setQuestionInputs({ ...questionInputs, ['studentAnswer']: studentString });


        if (!inputsAreValid(promptNum, studentString, startUnit, targetUnit)) {
            return;
        }

        let correctResponse = processCorrectResponse(title);

        const validatedUnit = validateUnitParameter(correctResponse);

        if (!validatedUnit) {
            displayUnitParameter(title);
            return;
        }

        const adjustedCorrectResponse = adjustCorrectResponseLength(correctResponse, title);
        const studentNumber = adjustCorrectResponseLength(studentString, title);

        setCorrectAnswer(adjustedCorrectResponse);
        return setScreenDisplay(Number(studentNumber) === Number(adjustedCorrectResponse) ? 'correct' : 'incorrect');
    }

    // modular functions
    function inputsAreValid(promptNum, studentString, startUnit, targetUnit) {
        const firstInput = !isNaN(promptNum);
        const secondInput = !isNaN(studentString);

        if (promptNum.length < 1) {
            setScreenDisplay('initialNeeded');
            return false;

        } else if (firstInput === false || secondInput === false) {
            setScreenDisplay('invalid');
            return false;

        } else if (startUnit.length < 1 || targetUnit.length < 1) {
            setScreenDisplay('units');
            return false;
        } else {
            return true;
        }
    }

    function processCorrectResponse(title) {

        if (title === 'Temperature') {
            return convertTemperatures();
        } else if (title === 'Volume') {
            return convertVolumes();
        }
        // add more units here
        // if invalid title, return an error
        // return needs to be a number
    }

    function validateUnitParameter(correctResponse) {
        const { targetUnit } = questionInputs;
        const minParam = minimums[targetUnit];

        if (correctResponse < minParam) {
            return false;
        } else {
            return true;
        }
    }

    function displayUnitParameter(title) {

        if (title === 'Temperature') {
            setScreenDisplay('belowZero');

        } else {
            setScreenDisplay('negativeVolume');
        }
        // add more units here
    }

    function adjustCorrectResponseLength(correctResponse, title) {
        let response = Number(correctResponse)
        let numberAdjust;

        if (response < 0.05 && title === 'Volume') {
            numberAdjust = response.toExponential(1);
            return numberAdjust;

        } else if (response > 999999 && title === 'Volume') {
            numberAdjust = response.toExponential(1);
            return numberAdjust;

        } else {
            numberAdjust = response.toFixed(1);
            return numberAdjust;
        }
    }

    function handleInputChanges(e) {
        const { name, value } = e.target;
        setQuestionInputs({ ...questionInputs, [name]: value });
        setScreenDisplay(''); // as inputs change, erase message
        setCorrectAnswer(''); // as inputs change, correctAnswer will change
    }

    // display function
    function generateScreenMessage() {
        switch (screenDisplay) {
            case ('initialNeeded'):
                return <div className='message warning'><p>Enter a Value to Convert</p></div>
            case ('invalid'):
                return <div className='message warning'><p>Invalid Value</p></div>
            case ('units'):
                return <div className='message warning'><p>Invalid, Check Your Units</p></div>
            case ('correct'):
                return <div className='message correct'><p>Correct!</p></div>
            case ('incorrect'):
                return <div className='message incorrect'><p>Incorrect: Solution {correctAnswer}</p></div>
            case ('belowZero'):
                return <div className='message parameters'><p>Below Absolute Zero</p></div>
            case ('negativeVolume'):
                return <div className='message parameters'><p>Negative Volume</p></div>
            default:
                <div></div>
        }
    }

    // unit conversion functions
    function convertTemperatures() {
        const { promptNum, startUnit, targetUnit } = questionInputs;
        const stringEquation = conversions[`${startUnit}`][`${targetUnit}`]; // get string equation
        const equationFunction = new Function('x', `return ${stringEquation}`); // function constructor
        const correctTemp = equationFunction(Number(promptNum)); // run function
        return correctTemp;
    }

    function convertVolumes() {
        const { promptNum, startUnit, targetUnit } = questionInputs;
        const correctVolume = Number(promptNum) * conversions[`${startUnit}`][`${targetUnit}`];
        return correctVolume;
    }

    useEffect(() => {
        setScreenDisplay('');
        setCorrectAnswer('');
        setQuestionInputs({
            promptNum: '',
            studentAnswer: '',
            startUnit: '',
            targetUnit: ''
        });
    }, [title]);


    return (
        <div className='unitConverter'>

            <form className='conversionForm'>
                <div className='inputField'>
                    <ValueInput
                        setFunction={(e) => handleInputChanges(e)}
                        keyPair={'promptNum'}
                        value={questionInputs.promptNum}
                        placeholder={'Value'}
                    />
                </div>
                <div className='inputField'>
                    <SelectUnit
                        units={units}
                        value={questionInputs.startUnit}
                        keyPair={'startUnit'}
                        setFunction={(e) => handleInputChanges(e)}
                    />
                </div>
                <div className='inputField arrows'>
                    <PiArrowsDownUpBold />
                </div>
                <div className='inputField'>
                    <SelectUnit
                        units={units}
                        value={questionInputs.targetUnit}
                        keyPair={'targetUnit'}
                        setFunction={(e) => handleInputChanges(e)}
                    />
                </div>
                <div className='inputField'>
                    <input
                        name={'studentAnswer'}
                        type='text'
                        placeholder='Answer'
                        value={questionInputs.studentAnswer}
                        onChange={(e) => submitConversion(e, questionInputs.promptNum, questionInputs.startUnit, questionInputs.targetUnit)}
                        className='textField'
                    />
                </div>
                <div className='screenMessageDiv'>
                    {generateScreenMessage()}
                </div>

            </form>
        </div>
    )
}
export default UnitConverter