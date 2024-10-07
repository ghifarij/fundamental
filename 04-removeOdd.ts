function removeOdd(arr : number[]) {
    let resArray : number[] = [];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0) {
            resArray.push(arr[i]);
        };
    };

    return resArray;
};

const newArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(removeOdd(newArr));

//Lecturer solution
function even(arr : number[]) {
    return arr.filter((item) => item % 2 == 0);
};