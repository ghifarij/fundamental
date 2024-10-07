function reverseStr(input: string) {
    return input.split("").reverse().join("");
};

// console.log(reverseStr("abcdef"));


// Function expression
const sum = function(a: number = 0, b: number = 0) {
    return a + b;
};

// console.log(sum(10, 5));

// nested function
function getMessage(firstName : string) {
    function sayHello() {
        return "Hello " + firstName;
    };

    function welcomeMessage() {
        return "Welcome to Purwadhika";
    };

    return sayHello() + ", " + welcomeMessage();
};

// console.log(getMessage("Jon"));

function capitalize(str : string) {
    let res : string = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str.charAt(i-1) == " ") {
            res += str.charAt(i).toUpperCase();
        } else {
            res += str.charAt(i).toLowerCase();
        }
    }
    return res
}

// console.log(capitalize("yAng seMangat donG!"));

function countDown(fromNumber : number) {
    console.log(fromNumber);

    let nextNumber : number = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    };
};

// countDown(10);


// Arrow function
const square = (x: number, y: number) => x * y;
// console.log(square(7, 9));
