/*
Create a function to get the intersection of two objects
● Example
    ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
    ○ Output: { a: 1 }
*/

function intersection(m : object, n : object) {
    let res : object = {};

    for (let key in m) {
        if(n.hasOwnProperty(key) && (m as any)[key] == (n as any)[key]) {
            (res as any)[key] = (m as any)[key];
        };
    };
    
    return res;
};

const input1 : object = { a: 1, b: 2};
const input2 : object = { a: 1, c: 3};

console.log(intersection(input1, input2));