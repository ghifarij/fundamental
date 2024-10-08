class User {
    firstName = "";
    #lastName = ""; // private
    static word = "Hello world"

    constructor (first: string, last: string) {
        this.firstName = first;
        this.#lastName = last;
    };

    greet() {
        console.log(`Hello ${this.firstName}`);
    };

    getLastName() {
        return this.#lastName
    }
};

const user1 = new User("Bon", "Jovi");
const user2 = new User("Laura", "Putri");
const user3 = new User("Sumail", "Yusuf");

// console.log(user2);
// user1.greet();
// console.log(user3.getLastName());

console.log(User.word);