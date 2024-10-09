/*
Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
    Array1 → [
        { name: ‘Student 1’, email : ‘student1@mail.com’ },
        { name: ‘Student 2’, email : ‘student2@mail.com’ }
    ]
    Array2 → [
        { name: ‘Student 1’, email : ‘student1@mail.com’ },
        { name: ‘Student 3’, email : ‘student3@mail.com’ }
    ]
● Result :
    ArrayResult → [
        { name: ‘Student 1’, email : ‘student1@mail.com’ },
        { name: ‘Student 2’, email : ‘student2@mail.com’ },
        { name: ‘Student 3’, email : ‘student3@mail.com’ }
    ]
*/

interface Student {
    name : string;
    email : string;
};

const arr1 : Student[] = [
    {name : "Student 1", email: "student1@gmail.com"},
    {name : "Student 2", email: "student2@gmail.com"}
];

const arr2 : Student[] = [
    {name : "Student 3", email: "student3@gmail.com"},
    {name : "Student 1", email: "student1@gmail.com"}
];

function merge(arr1 : Student[], arr2 : Student[]) {
    const result : Student[] = arr1;

    for (let item of arr2) {
        const idx = result.findIndex((val) => val.name == item.name && val.email == item.email);
        if(idx == -1) result.push(item);
    };

    return result;
};


console.log(merge(arr1, arr2));