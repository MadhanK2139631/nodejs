const EventEmitter = require('events');

class ShoppingCart extends EventEmitter{
    constructor(){
        super();
        this.items=[];;
    }
    addItem(item){
        this.items.push(item);
        this.emit('itemAdded',item);
    }
    removeItem(item){
        const idx=this.items.indexOf(item);
        if(idx > -1){
            this.items.splice(idx,1);
            this.emit('itemRemoved',item);
        }
    }
}

const cart = new ShoppingCart();

cart.on('itemAdded', item => {
    console.log(` Iteam Added: ${item}`);
});

cart.on('itemRemoved', item => {
    console.log(` Iteam Removed: ${item}`);
});


cart.addItem("apple");
cart.addItem("Banana");
cart.removeItem('apple');