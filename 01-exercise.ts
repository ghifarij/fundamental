/*
Create a function to calculate array of student data
The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/

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

        let age : number = today.getFullYear() - birthDate.getFullYear();
        let m : number = today.getMonth() - birthDate.getMonth();

        if(m < 0 || (m == 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age;
    };
};

// class Score {
//     highest = 0;
//     lowest = 0;
//     average = 0;

//     constructor(highest: number, lowest: number, average: number) {
//         this.highest = highest;
//         this.lowest = lowest;
//         this.average = average;
//     };
// };

const student1 = new Student("Andi", "andi@gmail.com", "1995-01-25", 90);
const student2 = new Student("Zafran", "andi@gmail.com", "2000-01-07", 99);
const student3 = new Student("Nindi", "andi@gmail.com", "2005-02-19", 80);

const arrStudentScore = [student1.score, student2.score, student3.score];
const arrStudentAge = [student1.getAge(), student2.getAge(), student3.getAge()];

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

console.log(minMax(arrStudentScore), minMax(arrStudentAge));