function fizzBuzz(n : number) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else (
            console.log(i)
        );
    };
};

// fizzBuzz(15);

//Lecturer solution
function fizzBuzz2(n2 : number) {
    const resArr : (string | number)[] = [];
    for(let i = 1; i <= n2; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            resArr.push("FizzBuzz")
        } else if (i % 3 == 0) {
            resArr.push("Fizz")
        } else if (i % 5 == 0) {
            resArr.push("Buzz")
        } else {
            resArr.push(i);
        };
    };

    return resArr.join(", ")
};

console.log(fizzBuzz2(15));
