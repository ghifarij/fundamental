//Write a code that show 1 if the input is a string, 2 if the input is a number, and 3 for others data type

const expression : any = false;

if (typeof expression == "string") {
    console.log(1);
} else if (typeof expression == "number") {
    console.log(2);
} else {
    console.log(3);
}

//Ternary: console.log(typeof expression == "string" ? 1 : typeof expression == number ? 2 : 3);