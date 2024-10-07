function calculateBMI(weight: number, height: number) {
    height = height / 100;
    let bmi : number = weight / (height ** 2);

    if (bmi <= 0) {
        return "input correct weight(kg) and height(cm)";
    } else if (bmi < 18.5) {
        return "less weight";
    } else if (bmi < 24.9) {
        return "ideal";
    } else if (bmi < 29.9) {
        return "overweight";
    } else if (bmi < 39.9){
        return "very overweight";
    } else {
        return "obesity";
    };
};

//Weight in kg & Height in cm
console.log(calculateBMI(50, 167));