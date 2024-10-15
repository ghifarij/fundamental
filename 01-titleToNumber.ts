/*
● Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    …
● Example :
    ○ Input : AB
    ○ Output : 28
*/

function titleToNumber(str: string) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    result = result * 26 + (str.charCodeAt(i) - 64);
  }

  return result;
}

console.log(titleToNumber("AA"));

function myFunction(str: string) {
  return str.split("").reduce((a, b) => a * 26 + parseInt(b, 36) - 9, 0);
}
