// interface Icar {
//     brand: string,
//     model: string,
//     price: number
// };

type Car = {
    brand: string,
    model: string,
    price: number
};

const car: Car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
};

interface User {
    name: string,
    hobby?: string,
    address?: {
        street: string,
        country: string
    },
    greeting(): void // tidak mereturn
}

const user: User = {
    name: "David",
    greeting() {
        console.log("Hello");
    }
};

// console.log(user.name);
// console.log(user["name"]);

// user.greeting();

user.hobby = "genshin";

delete user.hobby;

user.address = {
    street: "Braga",
    country: "Indonesia"
}

// console.log(user.address?.country);

console.log(Object.keys(user));