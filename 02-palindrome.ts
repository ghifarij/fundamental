//Write a code to check whether a string is a palindrome or not

const palindromeStr : string = "purwadhika";
let palindromeRes : string = "";

for (let i = palindromeStr.length - 1; i >= 0; i--) {
    palindromeRes += palindromeStr[i]; //Can also use palindromeRes += palindromeStr.charAt(i);
}

if (palindromeRes.toUpperCase() == palindromeStr.toUpperCase()) {
    console.log(`${palindromeStr} is palindrome`);
} else {
    console.log(`${palindromeStr} is not palindrome`);
}

//console.log(palindromeStr == palindromeRes ? "is palindrome" : "not palindrome"); can also use ternary.