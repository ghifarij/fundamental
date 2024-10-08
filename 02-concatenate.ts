// Write a function that takes an array of words and returns a string by concatenating the words in the array, 
// separated by commas and - last word - by and 'and'
// a. Example : arr = ["apple", "banana", "cherry", "date"] -> "apple,banana,cherry, and date"

function concatenate(input : string[]) {
    let res : string = "";
    for (let i = 0; i < input.length; i++) {
        if(i == input.length - 1) {
            res += `and ${input[i]}`;
        } else {
            res += `${input[i]}, `;
        };
    };
    return res;
};

const arrInput : string[] = ["apple", "banana", "cherry", "date", "banana"];

console.log(concatenate(arrInput));

// Lecturer solution
function concate(input : string[]) {
    const str : string = input.pop() || "";
    return input.join(", ") + ", and " + str;
};


// Friend solution
function two (n: string[]) {
    (n[n.length - 1]) = `and ${n[n.length - 1]}.`;
    return n.join(", ");
};

function concatenating (arr: string[] = []) {
    arr.splice(arr.length - 1, 1, ` and ${arr[arr.length - 1]}`);
    return arr.join(', ');
};