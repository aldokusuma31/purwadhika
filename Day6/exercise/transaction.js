class Produk {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const product1 = new Produk('apple', 10000)
const product2 = new Produk('banana', 5000)
const product3 = new Produk('melon', 15000)

class Transaction {
    #total = 0
    products = []

    addToChart(item, jumlah) {
        item.qty = jumlah
        this.products.push(item)
    }

    getTotal() {
        this.products.forEach((item) => {
            this.#total += item.price * item.qty
            console.log(`${item.name} x ${item.qty} = ${item.price * item.qty}`)
        })
        console.log('------------------------')
        console.log(`Total : ${this.#total}`)
    }
}

const transaction1 = new Transaction()

transaction1.addToChart(product1, 3)
transaction1.addToChart(product3, 1)
transaction1.addToChart(product2, 5)
transaction1.getTotal()

// console.log(transaction1.products)