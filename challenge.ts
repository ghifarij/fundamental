/*
    input = "seekor anjing dan babi bermain di taman"
    output = "seekor a****g dan b**i bermain di taman"
*/

function sensor(input: string) {
    const wordSensor = ["anjing", "babi", "monyet"];
    const res : string[] = [];

    input.split(" ").forEach((item) => {
        if(wordSensor.includes(item.toLowerCase())) {
            const first = item.charAt(0);
            const last = item.charAt(item.length-1);
            const middle = "*".repeat(item.length-2);
            res.push(first + middle + last)
        } else {
            res.push(item);
        }
    });

    return res.join(" ");
};

const str : string = "seekor anjing dan babi bermain di taman";
console.log(sensor(str));