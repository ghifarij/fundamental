/*
Create a program to create transaction
    ● Product Class
        ○ Properties
            ■ Name
            ■ Price
    ● Transaction Class
        ○ Properties
            ■ Total
            ■ Product
                * All product data
                * Qty
        ○ Add to cart method → Add product to transaction
        ○ Show total method → Show total current transaction
        ○ Checkout method → Finalize transaction, return transaction data
*/

class Product {
    name : string = "";
    price : number = 0;

    constructor(name : string, price : number) {
        this.name = name;
        this.price = price;
    };
};

const product1 = new Product("Apple", 20000);
const product2 = new Product("Pineapple", 18000);
const product3 = new Product("Watermelon", 9000);

class Transaction {
    #total : number = 0;
    #products : object[] = [];

    addProduct(product : Product, qty : number) {
        this.#products.push({
            ...product, 
            qty,
            total : product.price * qty
        });
        this.#total += product.price * qty;
    };

    showTotal() {
        this.#products.push({ total : this.#total});
        console.table(this.#products);
    };

    checkout(money : number) {
        if(money < this.#total) {
            throw new Error("Not enough money")
        } else {
            console.log(`Cash : ${money}\nReturn ${money - this.#total}`);
            console.log("=== THANK YOU ====")
        };
    };
};

const transaction1 = new Transaction();
transaction1.addProduct(product1, 10);
transaction1.addProduct(product3, 10);
transaction1.addProduct(product2, 10);

transaction1.showTotal();
transaction1.checkout(1000000);