const obj1 = { name: "andi", age: 25 };
const obj2 = { name: "andi", age: 25 };
// obj1 == obj -> false

// JSON.stringify() -> object to JSON
const json1 = JSON.stringify(obj1);
const json2 = JSON.stringify(obj2);
// json1 == json2 -> true

// JSON.parse() -> convert JSON to JavaScript

console.log(json1 == json2);
