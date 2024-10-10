class Employee {
    employeeName = "";
    workHours = 0;

    constructor(name : string) {
        this.employeeName = name;
    };

    addWorkHour(hour : number) {
        this.workHours += hour;
    };
};

class FulltimeEmployee extends Employee {
    hourSalary = 100000;
    extraHourSalary = 75000;

    constructor(name : string) {
        super(name);
    };

    calculateSalary() {
        if(this.workHours > 6) {
            return 6 * this.hourSalary + (this.workHours - 6) * this.extraHourSalary;
        } else {
            return this.workHours * this.hourSalary;
        };
    };
};

class ParttimeEmployee extends Employee {
    hourSalary = 50000;
    extraHourSalary = 30000;

    constructor(name : string) {
        super(name);
    };

    calculateSalary() {
        if(this.workHours > 6) {
            return 6 * this.hourSalary + (this.workHours - 6) * this.extraHourSalary;
        } else {
            return this.workHours * this.hourSalary;
        };
    };
};

const employee1 = new FulltimeEmployee("Joni");
employee1.addWorkHour(8);
console.log(employee1.calculateSalary());

const employee2 = new ParttimeEmployee("Doni");
employee2.addWorkHour(6);
console.log(employee2.calculateSalary());