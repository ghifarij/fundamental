// Problem: create a function that receiving array as input, and this function can find maximum value in array without using built-in method

/*
    Hints: 
    1. Since the input is array, we already know about the length of the array. let use for loop
    2. Set initial index value, conditional loop, changes after each loop
        FOR (let index = 0; index < arrInput.length; index++)
    3. Create variable to handle the result
        let maxValue = 0;
    4. Create conditional logic to compare maxValue from each iteration
        IF (maxValue < arrInput[index]){
        maxValue = arrInput[index]
        }
*/

// Solving
// Declare the function with parameter
function findMaxValue(arrInput : number[]) {
    // Define variable max value to keep the result
    let maxValue : number = 0;
    
    // Define loop, starting point, condition of looping, and changes after looping
    for (let i = 0; i < arrInput.length; i++) {
        // Define conditional to keep max value
        if (maxValue < arrInput[i]) {
            maxValue = arrInput[i];
        }
    }

    // Set end of for and return maxValue as the result of the execution function
    return maxValue;
}

console.log(findMaxValue([90, 10, 20, 30]));