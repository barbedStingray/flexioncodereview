import React, { useEffect, useState } from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';
import { HiMiniArrowsUpDown } from "react-icons/hi2";




const UnitConverter = ({ title, library }) => {

    const [screenDisplay, setScreenDisplay] = useState(''); // user feedback
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
        const { promptNum, startUnit, targetUnit } = questionInputs;
        console.log('convertTemperatures', promptNum, startUnit, targetUnit);
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
        const { promptNum, startUnit, targetUnit } = questionInputs;
        console.log('convertVolume', promptNum, startUnit, targetUnit);

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
        setQuestionInputs({ ...questionInputs, [name]: value });
        setScreenDisplay(''); // as inputs change, erase message
        setCorrectAnswer(''); // as inputs change, correctAnswer will change
    }

    function submitConversion(e, promptNum, startUnit, targetUnit) {
        e.preventDefault();

        // ! allows the input box to be filled in with text
        const studentString = e.target.value;
        setQuestionInputs({ ...questionInputs, ['studentAnswer']: studentString });

        // if either return false, function will cease
        const firstInput = validateInputs(promptNum);
        const secondInput = validateInputs(studentString);


        if (promptNum.length < 1) {
            console.log('inputs are not full yet');
            setScreenDisplay('initialNeeded');
            return

        } else if (firstInput === false || secondInput === false) {
            console.log('im sorry, check your inputs');
            setScreenDisplay('invalid');
            return

        } else if (startUnit.length < 1 || targetUnit.length < 1) {
            console.log('please check your Units');
            setScreenDisplay('units');
            return

        } else if (title === 'Temperature') {
            console.log('title is Temperature');
            // setScreenDisplay('');
            convertTemperatures();

        } else if (title === 'Volume') {
            console.log('title is Volume');
            // setScreenDisplay('');
            convertVolumes();

        } else {
            console.log('something fishy is going on here...');
            return
        }

        // validate correctness
        if (studentString === correctAnswer) {
            setScreenDisplay('correct');
        } else {
            setScreenDisplay('incorrect')
        }
    }

    function generateScreenMessage() {
        switch (screenDisplay) {
            case ('initialNeeded'):
                return <div className='message warning'><p>Enter a Value to Convert</p></div>
            case ('invalid'):
                return <div className='message warning'><p>Invalid, Check Your Values</p></div>
            case ('units'):
                return <div className='message warning'><p>Invalid, Check Your Units</p></div>
            case ('correct'):
                return <div className='message correct'><p>Correct!</p></div>
            case ('incorrect'):
                return <div className='message incorrect'><p>Sorry, Incorrect</p></div>
            // case (''):
            //     break;
            default:
                console.log('this is the default');
        }
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
            {/* <h1>{title}</h1> */}

            {/* {JSON.stringify(questionInputs)} */}
            <form className='conversionForm'>
                <div className='inputField'>
                    <ValueInput
                        setFunction={handleInputChanges}
                        keyPair={'promptNum'}
                        value={questionInputs.promptNum}
                        placeholder={'Initial Value'}
                    />
                </div>
                <div className='inputField'>
                    <SelectUnit
                        units={selectUnits}
                        value={questionInputs.startUnit}
                        keyPair={'startUnit'}
                        setFunction={handleInputChanges}
                    />
                </div>
                <div className='inputField arrows'>
                    <HiMiniArrowsUpDown />
                </div>
                <div className='inputField'>
                    <SelectUnit
                        units={selectUnits}
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