//Write a code to remove the first occurence of a given "search string" from a string

const givenString : string = "Hello world";
const searchString : string = "rld";

let removedString : string = givenString.replace(searchString, "");

console.log(`${givenString} - ${searchString} -> ${removedString}`);