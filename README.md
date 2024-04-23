# Flexion Code Challenge (unit-conversion)
Hello! This is my submission for the Flexion Code Challenge in April of 2024. 

## Project Description
The objective of this application is to assist teachers in grading worksheets for their science unit. Teachers can input their questions, unit parameters, and student responses to validate answers.

    Current Unit Conversions
        - Temperatures: Kelvin, Celsius, Fahrenheit, and Rankine
        - Volumes: Liters, Tablespoons, Cubic-inches, Cups, Cubic-feet, and Gallons

## Deployment
The app is currently deployed through Vercel. 
[View App Here](https://flexioncodereview.vercel.app)

## Running the App
If you would like to run the app locally, feel free to clone it down to your device. 
    
    On the Command Line... 
        - npm install
        - npm start

## Development Tasks
    1. Ensure unit tests are integrated as part of the deployment pipeline
    2. Function Constructor: Reform into my own modular function.
        - Security Concerns
        - function location 
        - would require library additions
    3. Identify functions that could be moved into their own files to increase reusability
        - Increase readability inside UnitConverter
        - Functions: screen message and conversions
    4. Turn the 'studentAnswer' input into a reusable component. 
    5. Refine the UX/UI: Is a solution display helpful? Needed? Can the CSS be more modular? inline-css?

### Technologies Used
    - React
    - Javascript
    - Jest