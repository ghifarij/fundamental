//Write a code to find the sum of the numbers 1 to N
const s : number =  15;

let sum : number = 0;
let desc : string = "";

for (let i = 1; i <= s; i++){
    sum += i

    if (i == 1) {
        desc += "1";
    } else {
        desc += ` + ${i}`;
    }
}

console.log(`${desc} = ${sum}`)