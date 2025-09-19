
class Validator {

    static isValidName(name) {
        const trimmed = name.trim();
        const regex = /^[A-Za-z]+$/;
        return regex.test(trimmed);
    }

    static isValidPrice(price) {
        const regex = /^[0-9]+(\.[0-9]{1,2})?$/;
        const parsed = parseFloat(price);
        return regex.test(price) && !isNaN(parsed) && parsed > 0;
    }

    static isDuplicateName(name, productList) {
        return productList.some(p => p.name.toLowerCase() === name.trim().toLowerCase());
    }
    
     static isValidQuantity(quantity) {
        const parsed = parseInt(quantity);
        return /^[0-9]+$/.test(quantity) && !isNaN(parsed) && parsed > 0;
    }
}

export default Validator;
