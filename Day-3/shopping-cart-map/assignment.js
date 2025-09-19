import readline from 'readline';
import Product from './product.js';
import shoppingCart from './shopping.js';
import Validator from './Validation.js';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const cart = new shoppingCart();

function inputData() {
    r1.question("Enter the product name: ", (name) => {
        if (!Validator.isValidName(name)) {
            console.log(" Product name must contain only alphabetic characters.");
            return inputData();
        }

        r1.question("Enter price of the product: ", (price) => {
            if (!Validator.isValidPrice(price)) {
                console.log("Price must be a valid number.");
                return inputData();
            }

            r1.question("Enter quantity of the product: ", (quantity) => {
                if (!Validator.isValidQuantity(quantity)) {
                    console.log("Quantity must be a positive integer.");
                    return inputData();
                }

                const product = new Product(name.trim(), parseFloat(price), parseInt(quantity));
                cart.addProduct(product);

                r1.question("Do you want to add another product? (Yes/No): ", (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        inputData();
                    } else {
                        console.log("\n List of Products in cart:");
                        console.log(cart.listProducts());
                        console.log("Total price of the product in the cart" + cart.productTotal());
                        console.log("Total quantity of items:", cart.getTotalQuantity());

                        r1.question("\nDo you want to remove a product? (Yes/No): ", (answer) => {
                            if (answer.toLowerCase() === 'yes') {
                                r1.question("Enter product name to remove: ", (removeName) => {
                                    if (!Validator.isValidName(removeName)) {
                                        console.log(" Invalid name.");
                                        return removeProducts();
                                    }

                                    cart.removeProduct(removeName.trim());
                                    console.log("\n List of the products:");
                                    console.log(cart.listProducts());
                                    console.log("Total price after removing item in cart:" + cart.productTotal());
                                });
                            } else {
                                console.log("\nList of the products:");
                                console.log(cart.listProducts());
                                console.log("Total price after removing item in cart:the " + cart.productTotal());
                                r1.close();
                            }
                        });

                    }
                });
            });
        });
    });
}




inputData();
