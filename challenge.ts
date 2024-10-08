/*
    input: "Pig latin is cool"
    output: "igPay attinlay siay oolcay"

    input: "Hello World"
    output: "elloHay orldWay"
*/

const str : string = "Pig latin is cool";

function challenge(input : string) {
    return input
        .split(" ")
        .map((word) => word.slice(1) + word[0] + "ay")
        .join(" ");

    // word.slice(1) to remove the first char from each string in the array 
    // + word[0] adds the first removed char to the end, then add "ay"
};

console.log(challenge(str));