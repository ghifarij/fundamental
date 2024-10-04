//Write a conditional statement to sort three numbers

const angka_1 : number = 10;
const angka_2 : number = 50;
const angka_3 : number = 90;

//1,2,3 ; 2,3,1 ; 3,1,2 ; 3,2,1 ; 1,3,2 ; 2,1,3

if (angka_1 > angka_2 && angka_2 > angka_3) {
    console.log(angka_3, angka_2, angka_1);
} else if (angka_2 > angka_3 && angka_3 > angka_1) {
    console.log(angka_1, angka_3, angka_2);
} else if (angka_3 > angka_1 && angka_1 > angka_2) {
    console.log(angka_2, angka_1, angka_3);
} else if (angka_3 > angka_2 && angka_2 > angka_1) {
    console.log(angka_1, angka_2, angka_3);
} else if (angka_1 > angka_3 && angka_3 > angka_2) {
    console.log(angka_2, angka_3, angka_1);
} else if (angka_2 > angka_1 && angka_1 > angka_3) {
    console.log(angka_3, angka_1, angka_2);
} else {
    console.log("Invalid input");
}

//Lecturer solution
let num1 : number = 99;
let num2 : number = 27;
let num3 : number = 50;

if (num1 > num2) {
    const n : number = num1;
    num1 = num2;
    num2 = n;
}
if (num2 > num3) {
    const n : number = num2;
    num2 = num3;
    num3 = n;
}
if (num1 > num2) {
    const n : number = num1;
    num1 = num2;
    num2 = n;
}
console.log(num1, num2, num3);