class Employee {
    name = ""
    #hour = 0
    type = ""
    #bSalary = 0
    #otSalary = 0

    constructor(name : string, type : string, bSalary : number, otSalary : number) {
        this.name = name
        this.type = type
        this.#bSalary = bSalary
        this.#otSalary = otSalary
    }

    setHour (n : number) {
        return this.#hour += n
    }

    getSalary() {
        if(this.#hour > 6) {
            return 6 * this.#bSalary + (this.#hour - 6) * this.#otSalary;
        } else {
            return this.#hour * this.#bSalary;
        }
    }
}

class FulltimeEmployee extends Employee {
    constructor(name : string) {
        super(name, "Fulltime", 100000, 75000)
    }
}

class ParttimeEmployee extends Employee {
    constructor(name : string) {
        super(name, "Parttime", 50000, 30000)
    }
}

const employee1 = new FulltimeEmployee("Joni")
employee1.setHour(6)
console.log(employee1.getSalary())

const employee2 = new ParttimeEmployee("Doni")
employee2.setHour(8)
console.log(employee2.getSalary())