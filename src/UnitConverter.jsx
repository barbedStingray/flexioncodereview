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


        if (validateUnitsAndInputs(promptNum, studentString, startUnit, targetUnit)) {
            return console.log('Invalid unit or Input');
        } else {
            console.log('units and inputs valid')
        }

        let correctResponse = processCorrectResponse(title);
        console.log('correctResponse', correctResponse);

        const unitParams = identifyUnitParameters(correctResponse);

        if (filterUnitParameters(unitParams, title)) {
            return console.log('Invalid unit parameters');
        } else {
            console.log('unit parameters valid');
        }

        correctResponse = adjustCorrectResponseLength(correctResponse, title);
        console.log('correctResponse', correctResponse);

        console.log('displaying to dom');
        setCorrectAnswer(correctResponse);
        setScreenDisplay(studentString === correctAnswer ? 'correct' : 'incorrect');
    }

    // modular functions
    function validateUnitsAndInputs(promptNum, studentString, startUnit, targetUnit) {
        const firstInput = !isNaN((promptNum));
        const secondInput = !isNaN((studentString));

        if (promptNum.length < 1) {
            console.log('inputs are not full yet');
            setScreenDisplay('initialNeeded');
            return true;

        } else if (firstInput === false || secondInput === false) {
            console.log('im sorry, check your inputs');
            setScreenDisplay('invalid');
            return true;

        } else if (startUnit.length < 1 || targetUnit.length < 1) {
            console.log('please check your Units');
            setScreenDisplay('units');
            return true;
        } else {
            return false;
        }
    }

    function processCorrectResponse(title) {
        console.log('processing correct response', title);
        let correctResponse;

        if (title === 'Temperature') {
            console.log('title is Temperature');
            correctResponse = convertTemperatures();

        } else if (title === 'Volume') {
            console.log('title is Volume');
            correctResponse = convertVolumes();

        } else {
            console.log('title not found');
            return
        }
        return correctResponse;
    }

    function identifyUnitParameters(correctResponse) {
        console.log('validate volume parameters', correctResponse);
        const { targetUnit } = questionInputs;

        const minParam = minimums[targetUnit];
        console.log('minParam', minParam);

        if (correctResponse < minParam) {
            console.log('unit range DNE');
            return false;
        } else if (correctResponse >= minParam) {
            console.log('range is acceptable');
            return true;
        } else {
            console.log('volume parameter check unknown');
            return
        }
    }

    function filterUnitParameters(unitParams, title) {
        console.log('filtering Unit parameters', title);

        if (title === 'Temperature' && unitParams === false) {
            console.log('below absolute zero');
            setScreenDisplay('belowZero');
            return true;

        } else if (title === 'Volume' && unitParams === false) {
            console.log('negative volume');
            setScreenDisplay('negativeVolume');
            return true

        } else {
            return false;
        }
    }

    function adjustCorrectResponseLength(correctResponse, title) {
        let numberAdjust;

        if (correctResponse < 0.05 && title === 'Volume') {
            numberAdjust = correctResponse.toExponential(1);
            return numberAdjust;

        } else if (correctResponse > 9999 && title === 'Volume') {
            numberAdjust = correctResponse.toExponential(1);
            return numberAdjust;

        } else {
            numberAdjust = correctResponse.toFixed(1);
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
                return <div className='message incorrect'><p>Sorry, Incorrect</p></div>
            case ('belowZero'):
                return <div className='message parameters'><p>Below Absolute Zero</p></div>
            case ('negativeVolume'):
                return <div className='message parameters'><p>Negative Volume</p></div>
            default:
                // console.log('this is the default');
                <div></div>
        }
    }

    // unit conversion functions
    function convertTemperatures() {
        console.log('converting temperatures');
        const { promptNum, startUnit, targetUnit } = questionInputs;
        const stringEquation = conversions[`${startUnit}`][`${targetUnit}`]; // get string equation
        const equationFunction = new Function('x', `return ${stringEquation}`); // function constructor
        const correctTemp = equationFunction(Number(promptNum)); // run function
        return correctTemp;
    }

    function convertVolumes() {
        console.log('converting volume');
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
                        setFunction={handleInputChanges}
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
                        setFunction={handleInputChanges}
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
                        setFunction={handleInputChanges}
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
                <div className='inputField solution'>
                    <p>Solution: {correctAnswer}</p>
                </div>
                <div className='screenMessageDiv'>
                    {generateScreenMessage()}
                </div>

            </form>
        </div>
    )
}
export default UnitConverter