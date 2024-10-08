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
    name = "";
    price = 0;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    };
};

class Transaction extends Product {
    total = 0;
    qty = 0;

    constructor(name: string, price: number, total: number, qty: number) {
        super(name, price);
        this.total = total;
        this.qty = qty;
    }

    addProduct() {
        
    }

    showTotal() {

    }

    checkOut() {

    }
};

console.log()