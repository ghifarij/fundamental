//Write a code to change every letter a into * from a string of input

const originalString : string = "An apple a day keeps the doctor away";
let newStr : string = "";

for (let i = 0; i < originalString.length; i++) {
    if(originalString.charAt(i).toLowerCase() == 'a') {
        newStr += "*";
    } else {
        newStr += originalString.charAt(i);
    }
}

console.log(newStr);

//Using regEx
//const res : string = str.replace(/a/gi, "*"); g means global, i means case insensitive.