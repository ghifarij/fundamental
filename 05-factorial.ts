/*
Create a function to find a factorial number using recursion
● Example
    ○ Input : 5
    ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function factorial(num : number) {
    if (num == 0) {
        return 1;
    };
    let res : number = num * factorial(num - 1);
    return res;
};

console.log(factorial(5));

// Lecturer solution
// const factorial = (n : number) : number => n == 0 ? 1 : n * factorial(n-1);