# Flexion Code Challenge (unit-conversion)
Hello! This is my submission for the Flexion Code Challenge in April of 2024. 

## Project Description
The objective of this application is to assist teachers in grading worksheets for a science unit. Currently, the worksheets focus on converting units of Temperature and Volume. With the application, teachers can input their questions, units of measurement, and student responses to validate answers.

    Available Unit Conversions
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
    3. Turn the 'studentAnswer' input into a reusable component. 
        - Detatch it from the submit function
        - Allow the for to submit upon a change in any of the four inputs
    4. Identify functions that could be moved into their own files to increase reusability
        - Increase readability inside UnitConverter
        - Functions: screen message and conversions
    5. Refine the UX/UI: run submit on any change to the form? Can the CSS be more modular?

### Technologies Used
    - React
    - Javascript
    - Jest