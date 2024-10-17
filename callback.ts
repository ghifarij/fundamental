function calculator(
  a: number,
  b: number,
  callback: (x: any) => void = displayer // default callback
) {
  callback(a + b);
}

function displayer(something: any) {
  console.log(something);
}

function multiply(num: number) {
  console.log(num * 2);
}

calculator(7, 3, multiply);

// callback function adalah sebuah function yang dikirim sebagai argumen ke function lain
/*
    [1, 2, 3].sort((a, b) => a - b); 
    function yang ada di dalam method sort adalah callback function
*/
