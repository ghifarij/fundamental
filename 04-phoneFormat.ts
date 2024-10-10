/*
    input = "123456789"
    output = "(123)-456-789"

    the input will always 9 number
*/

function phoneFormat(phoneNumber : string) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "($1)-$2-$3");
};

console.log(phoneFormat("987654321"));

//Lecturer solution

function myFunc(input : string) {
    let res : string = "(xxx)-xxx-xxx";
    for (let i = 0; i < input.length; i++) {
        res = res.replace("x", input.charAt(i));
    };
    return res;
};