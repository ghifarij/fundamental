//Write a function to get the lowest, highest and average value in the array (with and without sort function)

function getLowAvgHi(arr : number[]) {
    //with sort function
    arr.sort((a, b) => a-b);
    const lowest : number = arr[0];
    const highest : number = arr[arr.length - 1];

    let sum : number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average : number = sum / arr.length;
    
    return `lowest : ${lowest}, average : ${average.toFixed(4)}, highest : ${highest}`;
};

const input : number[] = [12, 5, 23, 18, 4, 45, 32];

console.log(getLowAvgHi(input));

// Lecturer solution
function minMax(arr : number[]){
    const lowest : number = Math.min(...arr);
    const highest : number = Math.max(...arr);
    const average : number = arr.reduce((a, b) => a + b) / arr.length;

    return {
        lowest: lowest,
        highest: highest,
        average: average
    };
};

// console.log(minMax(input));