//Write a code to find factorial of a number!
/*
    1. Find out hot to define a factorial number
    2. Example: the number is 6
       6 factorial number = 1 x 2 x 3 x 4 x 5 x 6(the formula)
    3. Take a look at the formula, there are incremental numbers on each process,
       and we have a limit of the iterarion is 6
    4. Define the loops rule: for (let i = 1; i <= 6; i++)
*/

//1. Define variable and assign value to variable
const numberOfFactorial : number = 6; //this variable would handle the final result

//2. Define the looping first, and insert the formula inside the looping process and assign the result value into result variable
let factorialResult : number = 1;
for (let i = 1; i <= numberOfFactorial; i++){
    factorialResult *= i;
}
console.log(`Factorial ${numberOfFactorial} is ${factorialResult}`);