/*
    input:
        str = "Purwadhika Bandung"
        n = 10
    output:
        "Purwadhika..."

    input:
        str = "Purwadhika Bandung"
        n = 15
    output:
        "Purwadhika Band..."

    input:
        str = "Purwadhika Bandung"
        n = 20
    output:
        "Purwadhika Bandung"
*/

function maxChar(str : string, n : number) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    };
};

console.log(maxChar("Purwadhika Bandung", 15));