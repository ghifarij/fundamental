// Write a function that adds an element to the end of an array.
// However, the element should only be added if it is not already in the array.

function addElement(arr : number[], input : number) {
    if(!arr.includes(input)) {
        arr.push(input);
    };
    
    return arr;
};

const newArr : number[] = [1, 2, 3, 4];
const input : number = 7;

console.log(addElement(newArr, input));