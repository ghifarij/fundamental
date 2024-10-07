const arr : string[] = ["Banana", "Apple", "Peach"];
const arr2 : number[] = new Array(25, 99, 1, 4);

// arr.push("Watermelon"); menambahkan value di belakang
// arr.unshift("Kiwi"); menambahkan value di depan

// arr.pop(); menghapus value terakhir
// arr.shift(); menghapus value pertama

// arr.splice(1, 1); menghapus indeks ke-? sebanyak ?

// arr2.sort((a, b) => a - b); sort asc
// arr2.sort((a, b) => b - a); sort desc 

const oddNumber : number[] = arr2
    .filter((item) => item % 2 == 1)
    .sort((a, b) => b - a);

// oddNumber.find((item) => item == 3); return the searched number
// oddNumber.findIndex((item) => item == 3); return the index of the number
// console.log(oddNumber.includes(25)); return boolean

const str : string = "Purwadhika Bandung";
// .split("") untuk mengubah string menjadi array.
// .join("") untuk menggabungkan array menjadi string.

const newArr : number[] = [10, 20, 30, 40, 50];
const newArr2 : number[] = newArr.map((item) => item += 5);
const newArr3 : number[] = [];

// newArr.forEach((item, idx) => {
//     newArr3.push(item + 5);
// });

// return array baru
// const newArr : number[] = [10, 20, 30, 40, 50];
// newArr.map((item, idx) => {
//     console.log(item, idx);
// });

// looping for of (array)
// for (let item of newArr) {
//     console.log(item);
// };