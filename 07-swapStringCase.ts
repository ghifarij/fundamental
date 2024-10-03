//Write a code to swap the case of each character from string
const newString : string = "The QuiCk BrOwN Fox";
let swappedString : string = "";

for (let i = 0; i < newString.length; i++) {
    if(newString[i] == newString[i].toLowerCase()) {
        swappedString += newString[i].toUpperCase();
    } else {
        swappedString += newString[i].toLowerCase();
    }
}

console.log(`${newString} -> ${swappedString}`);