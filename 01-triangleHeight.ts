function triangle(height : number) {
    let result : string = "";
    let count : number = 1;

    for (let i = 1; i <= height; i++) {
        let res : string = "";

        for (let j = 1; j <= i; j++) {
            if (count < 10) {
                res += `0${count} `;
            } else {
                res += `${count} `;
            }
            count++
        };

        if (i !== height) res += "\n";
        result += res;
    };

    return result;
};

console.log(triangle(5));