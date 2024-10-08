class Student {
    name = "";
    email = "";
    dob = "";
    score = 0;

    constructor(name: string, email: string, dob: string, score: number){
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.score = score;
    }

    getAge() {
        const today : Date = new Date();
        const birthDate : Date = new Date(this.dob);

        const diff = today.getTime() - birthDate.getTime();

        return Math.floor(diff / (24 * 60 * 60 * 1000) /365);
    };
};

const student1 = new Student("Andi", "andi@gmail.com", "1995-01-25", 90);
const student2 = new Student("Zafran", "andi@gmail.com", "2000-01-07", 100);
const student3 = new Student("Nindi", "andi@gmail.com", "2005-02-19", 75);

const arrStudent = [student1, student2, student3];

function calculate(arr : Student[]){
    const dataScore = arr.map((item) => item.score).sort((a,b) => a - b);
    const dataAge = arr.map((item) => item.getAge()).sort((a,b) => a - b);

    return {
        score: {
            lowest: dataScore[0],
            highest: dataScore[dataScore.length - 1],
            average: dataScore.reduce((a, b) => a + b) / dataScore.length
        },
        age: {
            lowest: dataAge[0],
            highest: dataAge[dataAge.length - 1],
            average: dataAge.reduce((a, b) => a + b) / dataAge.length
        }
    };
};

console.log(calculate(arrStudent));