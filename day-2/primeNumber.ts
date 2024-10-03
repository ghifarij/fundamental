//Write a code to check whether the number is prime number or not
const bilanganPrima : number = 121;

let divider : number = 0;

for (let i = 1; i <= bilanganPrima; i++) {
    if(bilanganPrima % i == 0) {
        divider++;
    }
}
if (bilanganPrima < 2) {
    console.log("Angka harus lebih besar dari 1");
} else  if (bilanganPrima == 2 || bilanganPrima == 3 || divider == 2) {
    console.log(`${bilanganPrima} adalah bilangan prima`);
} else {
    console.log(`${bilanganPrima} bukan bilangan prima`);
}