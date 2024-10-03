//Write a code to format number 

const rupiah : number = 95000000;

let Rp = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
});
console.log(`${rupiah} -> ${Rp.format(rupiah)}`);

const rupiah2 : number = 1500500;
const rupiahStr : string = rupiah2.toString(); // .length .charAt
let count : number = 0;

let rupiahRes : string = "";

for (let i = rupiahStr.length - 1; i >= 0; i--){
    if (count % 3 == 0 && count > 0) {
        rupiahRes = "." + rupiahRes;
    }
    rupiahRes = rupiahStr.charAt(i) + rupiahRes;
    count++;
}
console.log(`${rupiah2} -> Rp ${rupiahRes},00`);