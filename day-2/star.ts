let totalStar : number = 5;
let star : string = "";

/*
    *
    **
    ***
    ****
    *****
*/
for (let i = 1; i <= totalStar; i++){
    console.log(("*").repeat(i))
}

/*
        *
       **
      ***
     ****
    *****
*/
for(let i = 1; i <= totalStar; i++) {
    //printing space
    for (let j = 1; j <= totalStar - i; j++){
        star += " ";
    }
    //printing star
    for (let k = 1; k <= i; k++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);

for(let i = 1; i <= totalStar; i++) {
    console.log(" ".repeat(totalStar-i) + "*".repeat(i));
}

