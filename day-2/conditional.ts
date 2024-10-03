const age : number = 21;

if (age >= 17) {
    console.log("Boleh membuat KTP");
} else {
    console.log("Belum cukup umur");
}

let grade : string = "c";
if (grade.toUpperCase() == "A"){
    console.log("Excellent result");
} else if (grade.toUpperCase() == "B") {
    console.log("Great result");
} else if (grade.toUpperCase() == "C") {
    console.log("Good result");
} else {
    console.log("Not pass");
}

const x : number = 5;
const y : number = 3;

console.log(x < 10 && y > 2);

//ternary
const str : string = "TypeScript";
console.log(str == "TypeScript" ? "TypeScript" : "Not TypeScript");