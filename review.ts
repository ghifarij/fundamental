const str: string = String(100);
const str2: string = "100"; //true

const num: number = Number("100");
const num2: number = 100; //true

//[], {} true

const data: any = 1; //data == data2 -> true
const data2: any = true; //data === data2 -> false

const arr: number[] = [1, 2, 3, 4, 5];

// Mempengaruhi Array / Mutating Method
// arr.push(6);
// arr.pop;
// arr.shift();
// arr.unshift(9);
// arr.splice(0, 1, 0);
// arr.sort((a, b) => b - a);
// arr.reverse();
// arr.fill(2);
// arr.copyWithin(2, 0);

console.log(arr);
