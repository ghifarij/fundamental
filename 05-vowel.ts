/*
    input : "Purwadhika"
    output : 4

    input : "Bandung"
    output : 2
*/

function countVowel(str : string) {
    let count : number = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() == "a" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "u" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "o" ) {
            count++;
        };
    };

    return count;
};

const input : string = "Purwadhika";
console.log(countVowel(input));

// Lecturer solution
function myFunc(str : string) {
    const vowel : string[] = ["a", "i", "u", "e", "o"];
    let res : number = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            res++;
        };
    };
    return res;
};

console.log(myFunc("Bandung"));