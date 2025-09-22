class product{
    constructor(name , price){
        Object.defineProperty(this, 'name',{
            value : name,
            writable:false,
            enumerable:false,
            configurable:false
        });
        this.price=price;
    }
}

class shoppingCart{
    constructor(){
        this.products=[]; 
    }
    addproduct(product){
     this.products.push(product);
     console.log(`${product.name} added to cart`);
    }
    removeProduct(productName){
        this.products=this.products.filter(p=>p.name !==productName);
        return productName;
    }
    productTotal(){
        return this.products.reduce((total, product )=> total + product.price,0);
    }

}



const cart = new shoppingCart();

const product1 = new product("bag",2000);
const product2 = new product("shoe",1000);
console.log(product1)
console.log(product2)
cart.addproduct(product1);
cart.addproduct(product2);
console.log('----------------')
console.log("Total price:",cart.productTotal())
console.log(`Removing the product ${cart.removeProduct("shoe")}:`,cart.productTotal());

