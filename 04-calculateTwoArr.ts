// Write a function to calculate each element in the same position from two arrays of integer,
// assume both arrays are of the same length.

function calculate(input : number[], input2 : number[]) {
    if (input.length !== input2.length) {
        console.log("Jumlah array harus sama");
    } else {
        let sum : number = 0;
        let res : number[] = [];
    
        for (let i = 0; i < input.length; i++) {
            sum = input[i] + input2[i];
            res.push(sum);
    };
           
    return res;
    };
};

const input : number[] = [1,2,3];
const input2 : number[] = [3,2,1];

console.log(calculate(input, input2));