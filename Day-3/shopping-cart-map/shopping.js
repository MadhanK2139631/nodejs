
class ShoppingCart {
    constructor() {
        this.products = new Map();
    }

    addProduct(product) {
        if (this.products.has(product.name)) {
            console.log(`${product.name} is already in the cart`);
        } else {
            this.products.set(product.name, product);
            console.log(`${product.name} added to cart`);
        }
    }

    removeProduct(productName) {
        if (this.products.has(productName)) {
            this.products.delete(productName);
            console.log(`${productName} removed from cart`);
        } else {
            console.log(`${productName} not found in cart`);
        }
        return productName;
    }

    listProducts() {
        if (this.products.size === 0) return "product Cart is empty.";
        return Array.from(this.products.values()).map(p =>
            `${p.name}: ${p.quantity} x ${p.price.toFixed(2)} = ${p.getTotalPrice().toFixed(2)}.`
        ).join('\n');
    }
    getTotalQuantity() {
        let totalQty = 0;
        for (const product of this.products.values()) {
            totalQty += product.quantity;
        }
        return totalQty;
    }
    productTotal() {
        let total = 0;
        for (const product of this.products.values()) {
            total += product.getTotalPrice();
        }
        return total.toFixed(2);
    }
}

export default ShoppingCart