/*
Create a function to check if two objects are equal
● Example
    ○ Input : { a: 2 } & { a: 1 }
    ○ Output: false
● Example
    ○ Input : { a: “Hello” } & { a: 1 }
    ○ Output: false
● Example
    ○ Input : { a: 1 } & { a: 1 }
    ○ Output: true
*/

function equal(input1 : object, input2 : object) {
    const key1 = Object.keys(input1);
    const key2 = Object.keys(input2);
    if(key1.length !== key2.length){
        return false;
    };

    for (let key of key1){
        if (input1[key as keyof typeof input1] !== input2[key as keyof typeof input2]) {
            return false;
        };
    };
   
    return true;
};

const obj1 = {a : 5, b : 10};
const obj2 = {a : 5, b : 10};

console.log(equal(obj1, obj2));