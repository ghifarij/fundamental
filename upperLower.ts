/*
    input = "Hello Purwadhika"
    output = [13, 2]

    input = "B4ndung"
    output = [5, 1]

    answer = [lowerCount, upperCount]
*/

function upper(str: string) {
  str.split("");

  let countLower: number = 0;
  let countUpper: number = 0;

  const res: number[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      countUpper++;
    }
    if (str[i].match(/[a-z]/)) {
      countLower++;
    }
  }
  res.push(countLower, countUpper);

  return res;
}

console.log(upper("Hello Purwadhika"));

function myFunc(str: string) {
  const letter: string = str.replace(/[\s/0-9]/g, "");
  const lower: string = letter.replace(/[A-Z]/g, "");

  return [lower.length, letter.length - lower.length];
}

console.log(upper("B4ndung"));
