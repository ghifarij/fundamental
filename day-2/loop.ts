for (let i = 0; i < 3; i++) {
    console.log("I'm back");
}

let n : number = 1;
while(n <= 5) {
    console.log(`Hello ke-${n}`);
    n++;
}

do {
    console.log("At least once running");
    n++;
} while (false); //This code at least executed once