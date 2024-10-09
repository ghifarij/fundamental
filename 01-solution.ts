// if there is a new file called solution, it means that it is the lecturer solution
// if there isn't. The problem is already solved or the lecturer solution is same
interface Input {
    [x: string]: any;
};

const obj1 : Input = {a: 1, b: "Hello"};
const obj2 : Input = {a: 1, b: "Hello"};

function isEqual(obj1 : Input, obj2: Input) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    };

    for (let key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false
        };
    };

    return true
};

console.log(isEqual(obj1, obj2));