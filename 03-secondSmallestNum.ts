//Write a function from a given array of numbers and return the second smallest number

function secondSmallest(input : number[]) {
    input.sort((a, b) => a -b);
    let output = input[0];
    for (let i = 0; i < input.length; i++) {
        if(input[i]>output) {
            output = input[i];
            i = input.length; // stop the looping
        };
    }
    return output
};

const example : number[] = [5, 3, 7, 2, 6, 1];

console.log(secondSmall(example));

// Lecturer solution

function secondSmall(arr : number[]) {
    arr.sort((a, b) => a - b);
    const newArr = arr.filter((item) => item > arr[0]);

    return newArr[0];
}