let name: string = "Andin";
let newName: string = name;

name = "Budi";

// console.log(name);

const arr: number[] = [1, 2, 3];
const newArr: number[] = [...arr];

arr.push(4);

// console.log(newArr);

interface Person {
    name: string,
    age: number
};

const person: Person = {
    name: "Andi",
    age: 25
};

const newPerson = {...person};
newPerson.name = "Budi";

// console.log(person);
// console.log(newPerson);

for (let key in person) {
    console.log(key)
    console.log(person[key as keyof typeof person]);
}