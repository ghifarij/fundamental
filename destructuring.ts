const person = {
    name: "David",
    age: 25,
    hobby: "genshin"
};

// object destructuring
const {name, age, hobby} = person;

// console.log(name);

const arr = [1, 2, 3];
const [a, b, c] = arr;

// console.log(b)

const user = {
    firstName: "Franky",
    lastName: "Boy",
    greet() {
        console.log(`Hello I'm ${this.firstName}`)
    }
};

// user.greet();

// console.log(Object.entries(user));

// Object.freeze(user);

console.log(user.hasOwnProperty("greet"));

console.log(Object.values(user));