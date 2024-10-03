//Write a code to print the first N fibonacci numbers
//0, 1, 1, 2, 3, 5, 8, 13 ...
//15 => 610

const fibonacciNum : number = 15;

let a : number = 0;
let b : number = 1;

for (let i = 1; i < fibonacciNum; i++) {
    let nextNum : number = a + b;
    a = b;
    b = nextNum;
}

console.log(`N fibonacci of ${fibonacciNum} is ${b}`);