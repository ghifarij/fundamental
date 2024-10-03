//Write a code to capitalize the first letter of each word in a string

const templateString : string = "hello world let's meet";
let updatedString : string = "";

for (let i = 0; i < templateString.length; i++){
    if (i == 0 || templateString[i - 1] == " "){
        updatedString += templateString[i].toUpperCase();
    } else {
        updatedString += templateString[i];
    }
}

console.log(updatedString);