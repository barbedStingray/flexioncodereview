import React, { useEffect, useState } from 'react';
import ValueInput from './Components/ValueInput';
import SelectUnit from './Components/SelectUnit';



const UnitConverter = ({ title, library }) => {

    const [correctAnswer, setCorrectAnswer] = useState('');
    const [screenDisplay, setScreenDisplay] = useState('Correct');
    const [questionInputs, setQuestionInputs] = useState({
        promptNum: '',
        studentAnswer: '',
        startUnit: '',
        targetUnit: ''
    });
    // console.log('SCREEN DISPLAY', screenDisplay);


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
        setQuestionInputs({ ...questionInputs, [name]: value });
        setScreenDisplay(''); // as inputs change, erase message

    }

    function submitConversion(e, promptNum, startUnit, targetUnit) {
        e.preventDefault();
        console.log('submitConversion', promptNum, startUnit, targetUnit);

        // ! allows the input box to be filled in with text
        const studentString = e.target.value;
        setQuestionInputs({ ...questionInputs, ['studentAnswer']: studentString });

        // if either return false, function will cease
        const firstInput = validateInputs(promptNum);
        const secondInput = validateInputs(studentString);


        if (promptNum.length === 0) {
            console.log('inputs are not full yet');
            setScreenDisplay('initialNeeded');
            return

        } else if (firstInput === false || secondInput === false) {
            console.log('im sorry, check your inputs');
            setScreenDisplay('invalid');
            return

        } else if (title === 'Temperature') {
            console.log('title is Temperature');
            setScreenDisplay('');
            convertTemperatures();

        } else if (title === 'Volume') {
            console.log('title is Volume');
            setScreenDisplay('');
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
                return <p>Please Enter a Value to Convert</p>
            case ('invalid'):
                return <p>Invalid Number, Check Your Values.</p>
            case('correct'):
                return <p>Correct!</p>
            case('incorrect'):
                return <p>Sorry, Incorrect</p>
            case (''):
                break;
            default:
                console.log('this is the default');
        }
    }

    useEffect(() => {
        console.log(title);
        setScreenDisplay('');
        setQuestionInputs({
            promptNum: '',
            studentAnswer: '',
            startUnit: '',
            targetUnit: ''
        });
        // if (title === 'Temperature') {
        //     setQuestionInputs({
        //         promptNum: '',
        //         studentAnswer: '',
        //         startUnit: 'Celsius',
        //         targetUnit: 'Celsius'
        //     });
        // } else if (title === 'Volume') {
        //     setQuestionInputs({
        //         promptNum: '',
        //         studentAnswer: '',
        //         startUnit: 'CubicFeet',
        //         targetUnit: 'CubicFeet'
        //     });
        // }
    }, [title]);




    return (

        <div className='unitConverter'>
            <h1>{title}</h1>

            {JSON.stringify(questionInputs)}
            {generateScreenMessage()}

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
                        value={questionInputs.startUnit}
                        keyPair={'startUnit'}
                        setFunction={handleInputChanges}
                    />
                    <SelectUnit
                        units={selectUnits}
                        value={questionInputs.targetUnit}
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
            </div>
        </div>
    )
}
export default UnitConverter