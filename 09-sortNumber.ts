//Write a conditional statement to sort three numbers

const angka_1 : number = 100;
const angka_2 : number = 50;
const angka_3 : number = 30;

//1,2,3 ; 2,3,1 ; 3,1,2 ; 3,2,1 ; 1,3,2 ; 2,1,3

if (angka_1 > angka_2 && angka_2 > angka_3) {
    console.log(`${angka_3}, ${angka_2}, ${angka_1}`);
} else if (angka_2 > angka_3 && angka_3 > angka_1) {
    console.log(`${angka_1}, ${angka_3}, ${angka_2}`);
} else if (angka_3 > angka_1 && angka_1 > angka_2) {
    console.log(`${angka_2}, ${angka_1}, ${angka_3}`);
} else if (angka_3 > angka_2 && angka_2 > angka_1) {
    console.log(`${angka_1}, ${angka_2}, ${angka_3}`);
} else if (angka_1 > angka_3 && angka_3 > angka_2) {
    console.log(`${angka_2}, ${angka_3}, ${angka_1}`);
} else if (angka_2 > angka_1 && angka_1 > angka_3) {
    console.log(`${angka_3}, ${angka_1}, ${angka_2}`);
} else {
    console.log("Invalid input");
}