/*
Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
    ○ Input : [{ name: ‘David’, age: 20 }]
    ○ Output : [{ David: ‘name’, 20: ‘age’}]
*/

function switchType(input : any) {
    const res : any = {};

    for (let key in input[0]) {
        res[input[0][key]] = key;
    };

    return [res];
};

const arr1 = [{name : "David", age : 20}];

console.log(switchType(arr1));