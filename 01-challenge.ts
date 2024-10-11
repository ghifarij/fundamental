/*
    a = 1
    b = 2
    c = 3
    ...
    z = 26

    input ="Abcd"
    output = 10
*/

function countAlphabet(str: string) {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  let sum: number = 0;

  for (let i = 0; i < alphabet.length; i++) {
    let alphabetNums: number = i + 1;

    for (let j = 0; j < str.length; j++) {
      if (str[j].toLowerCase() == alphabet[i]) {
        sum += alphabetNums;
      }
    }
  }
  return sum;
}

const input: string = "Bandung";
console.log(myFunction(input));

function myFunction(str: string) {
  const alpha: string[] = " abcdefghijklmnopqrstuvwxyz".split("");

  return str
    .split("")
    .map((item) => alpha.indexOf(item.toLowerCase()))
    .reduce((a, b) => a + b);
}
