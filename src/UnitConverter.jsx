import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PiArrowsDownUpBold } from "react-icons/pi";



const UnitConverter = ({ library }) => {

    const { title, units } = library;
    const [screenDisplay, setScreenDisplay] = useState(''); // user feedback


    const [valueOne, setValueOne] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);
    const [unitOne, setUnitOne] = useState('');
    const [unitTwo, setUnitTwo] = useState('');
    const [runEffectOne, setRunEffectOne] = useState(false);
    const [runEffectTwo, setRunEffectTwo] = useState(false);

    useEffect(() => {
        if (title === 'Temperature') {
            setUnitOne('Celsius');
            setUnitTwo('Celsius');
        } else if (title === 'Volume') {
            setUnitOne('CubicFeet');
            setUnitTwo('CubicFeet');
        }
        setValueOne(0);
        setValueTwo(0);
    }, [title]);

    // console.log('values:', valueOne, unitOne, valueTwo, unitTwo);

    // CHANGE - valueOne, unitOne
    useEffect(() => {
        // console.log('value ONE change');
        const serverData = { unit: title, startValue: valueOne, startUnit: unitOne, targetUnit: unitTwo }
        axios.post('/api/conversion', serverData).then((result) => {
            console.log('server response', result.data);
            setValueTwo(result.data);
        }).catch((error) => {
            console.log('server error', error);
        });
    }, [runEffectOne, unitOne, unitTwo]);

    // CHANGE - valueTwo, unitTwo
    useEffect(() => {
        // console.log('value TWO change');
        const serverData = { unit: title, startValue: valueTwo, startUnit: unitTwo, targetUnit: unitOne }
        axios.post('/api/conversion', serverData).then((result) => {
            console.log('server response', result.data);
            setValueOne(result.data);
        }).catch((error) => {
            console.log('server error', error);
        });
    }, [runEffectTwo]);





    // master function
    // function submitConversion(e, promptNum, startUnit, targetUnit) {
    //     e.preventDefault();

    //     // handle the input change
    //     const studentString = e.target.value;
    //     setQuestionInputs({ ...questionInputs, ['studentAnswer']: studentString });


    //     if (!inputsAreValid(promptNum, studentString, startUnit, targetUnit)) {
    //         return;
    //     }
    //     let correctResponse = processCorrectResponse(title);

    //     const validatedUnit = validateUnitParameter(correctResponse);

    //     if (!validatedUnit) {
    //         displayUnitParameter(title);
    //         return;
    //     }

    //     const adjustedCorrectResponse = adjustCorrectResponseLength(correctResponse, title);
    //     const studentNumber = adjustCorrectResponseLength(studentString, title);

    //     setCorrectAnswer(adjustedCorrectResponse);
    //     return setScreenDisplay(Number(studentNumber) === Number(adjustedCorrectResponse) ? 'correct' : 'incorrect');
    // }

    // // modular functions
    // function inputsAreValid(promptNum, studentString, startUnit, targetUnit) {
    //     const firstInput = !isNaN(promptNum);
    //     const secondInput = !isNaN(studentString);

    //     if (promptNum.length < 1) {
    //         setScreenDisplay('initialNeeded');
    //         return false;

    //     } else if (firstInput === false || secondInput === false) {
    //         setScreenDisplay('invalid');
    //         return false;

    //     } else if (startUnit.length < 1 || targetUnit.length < 1) {
    //         setScreenDisplay('units');
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // function processCorrectResponse(title) {

    //     if (title === 'Temperature') {
    //         return convertTemperatures();
    //     } else if (title === 'Volume') {
    //         return convertVolumes();
    //     }
    //     // add more units here
    //     // if invalid title, return an error
    //     // return needs to be a number
    // }

    // function validateUnitParameter(correctResponse) {
    //     const { targetUnit } = questionInputs;
    //     const minParam = minimums[targetUnit];

    //     if (correctResponse < minParam) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // function displayUnitParameter(title) {

    //     if (title === 'Temperature') {
    //         setScreenDisplay('belowZero');

    //     } else {
    //         setScreenDisplay('negativeVolume');
    //     }
    //     // add more units here
    // }

    // function adjustCorrectResponseLength(correctResponse, title) {
    //     let response = Number(correctResponse)
    //     let numberAdjust;

    //     if (response < 0.05 && title === 'Volume') {
    //         numberAdjust = response.toExponential(1);
    //         return numberAdjust;

    //     } else if (response > 999999 && title === 'Volume') {
    //         numberAdjust = response.toExponential(1);
    //         return numberAdjust;

    //     } else {
    //         numberAdjust = response.toFixed(1);
    //         return numberAdjust;
    //     }
    // }

    // function handleInputChanges(e) {
    //     const { name, value } = e.target;
    //     setQuestionInputs({ ...questionInputs, [name]: value });
    //     setScreenDisplay(''); // as inputs change, erase message
    //     setCorrectAnswer(''); // as inputs change, correctAnswer will change
    // }

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
                return <div className='message incorrect'><p>Incorrect</p></div>
            case ('belowZero'):
                return <div className='message parameters'><p>Below Absolute Zero</p></div>
            case ('negativeVolume'):
                return <div className='message parameters'><p>Negative Volume</p></div>
            default:
                <div></div>
        }
    }


    return (
        <div className='unitConverter'>

            <form className='conversionForm'>
                <div className='inputField'>
                    <input
                        name='valueOne'
                        type='number'
                        placeholder='Value One'
                        value={valueOne}
                        onChange={(e) => {
                            setValueOne(e.target.value);
                            setRunEffectOne(!runEffectOne);
                        }}
                        className='textField'
                    />
                </div>
                <div className='inputField'>

                    <select
                        name='unitOne'
                        onChange={(e) => setUnitOne(e.target.value)}
                        value={unitOne}
                        className='selectField'
                    >
                        {units.map((unit, i) => (
                            <option key={i} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>

                </div>
                <div className='inputField arrows'>
                    <PiArrowsDownUpBold />
                </div>
                <div className='inputField'>

                    <select
                        name='unitTwo'
                        onChange={(e) => setUnitTwo(e.target.value)}
                        value={unitTwo}
                        className='selectField'
                    >
                        {units.map((unit, i) => (
                            <option key={i} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='inputField'>

                    <input
                        name='valueTwo'
                        type='number'
                        placeholder='Value Two'
                        value={valueTwo}
                        onChange={(e) => {
                            setValueTwo(e.target.value);
                            setRunEffectTwo(!runEffectTwo);
                        }}
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