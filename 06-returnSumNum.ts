// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function mix(input : any[]) {
    let res : number = 0;
    
    for (let i = 0; i < input.length; i++) {
        if(typeof input[i] == "number") {
            res += input[i];
        }
    }

    return res;
}

const mixArr : any[] = ["3", 1, "string", null, false, undefined, 2];
console.log(mix(mixArr));